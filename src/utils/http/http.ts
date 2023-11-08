import cookie from "js-cookie";
import {updateTokenEndpoint} from "../helpers/constants/constants.ts";
import {getAccessToken} from "../helpers/helpers/getAccessToken.ts";
import axios from "axios";

const $api = axios.create({
  withCredentials: false,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAccessToken(cookie.get("access_token")!)}`
  return config
})

$api.interceptors.response.use((config) => {
  return config
}, async (error) => {
  try {
    const originalRequest = error.config

    if(error.response?.data.message === "jwt expired" ||
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      const response = await axios.post(updateTokenEndpoint, {
        token: cookie.get("refresh_token")
      })

      cookie.set("refresh_token", response?.data?.refreshToken)
      cookie.set("access_token", response?.data?.accessToken)

      return $api.request(originalRequest)
    }
  } catch (e) {
    console.warn(e)
  }
  throw error
})

export default $api