import {createAsyncThunk} from "@reduxjs/toolkit";
import {loginEndpoint} from "../../utils/helpers/constants/constants.ts";
import cookie from "js-cookie";

export const loginThunk = createAsyncThunk(
  "login/fetchAuth",
  async ({email, password}: {[keyof: string]: string}) => {
    const response = await fetch(loginEndpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const responseData = await response.json()

    if(response.ok && response.status === 200) {
      if(responseData?.success) {
        cookie.set("refresh_token", responseData?.refreshToken)
        cookie.set("access_token", responseData?.accessToken)
      }
    }

    return responseData
  }
)