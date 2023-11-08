import {createAsyncThunk} from "@reduxjs/toolkit";
import {registerEndpoint} from "../../utils/helpers/constants/constants.ts";
import cookie from "js-cookie";

export const registerThunk = createAsyncThunk(
  "register/fetchAuthRegister",
  async ({name, email, password}: {[keyof: string]: string}) => {
    try {
      const response = await fetch(registerEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
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
        throw Error("Failed Registration")
      }
    } catch (e) {
      if(e instanceof Error) throw new Error(e?.message)
    }
  }
)