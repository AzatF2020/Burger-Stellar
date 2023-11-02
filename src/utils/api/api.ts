import cookie from "js-cookie";
import {updateTokenEndpoint} from "../../helpers/constants/constants.ts";

const checkResponse = (response: any) => {
  if(response.ok) {
    return response.json()
  } else {
    return response.json()
      .then((error: any) => Promise.reject(error))
  }
}

export const refreshToken = async () => {
  const token = cookie.get("refresh_token")

  if (!token) {
    throw new Error("Refresh token not exists");
  }

  const response = await fetch(updateTokenEndpoint, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      token: cookie.get("refresh_token")
    })
  })

  const responseData = await response.json()

  if (response.ok && response.status === 200) {
    if (responseData?.success) {
      cookie.set("refresh_token", responseData?.refreshToken)
      cookie.set("access_token", responseData?.accessToken)
    }
  } else {
    throw new Error("Failed Update token")
  }
}

export const fetchWithRefreshToken = async(url: string, options: any) => {
  try {
    const response = await fetch(url, options)
    return await checkResponse(response)
  } catch (error: any) {
    if(error?.message === "jwt expired") {
      await refreshToken()
    }
  }
}