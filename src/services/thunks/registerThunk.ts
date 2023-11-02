import {createAsyncThunk} from "@reduxjs/toolkit";
import {registerEndpoint} from "../../helpers/constants/constants.ts";
import cookie from "js-cookie";

export const registerThunk = createAsyncThunk(
  "register/fetchAuthRegister",
  async ({...args}: {[keyof: string]: string}) => {
    try {
      const response = await fetch(registerEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...args
        })
      })
      if(response.ok && response.status === 200) {
        const responseData = await response.json()

        if(responseData?.success) {
          cookie.set("refresh_token", responseData?.refreshToken)
          cookie.set("access_token", responseData?.accessToken)
          return responseData
        }
      } else {
        throw new Error("Failed Registration")
      }
    } catch (e) {
      if(e instanceof Error) throw new Error(e?.message)
    }
  }
)