import {createAsyncThunk} from "@reduxjs/toolkit";
import { userDataEndpoint} from "../../helpers/constants/constants.ts";
import {getAccessToken} from "../../helpers/helpers/getAccessToken.ts";
import cookie from "js-cookie";
import {fetchWithRefreshToken} from "../../utils/api/api.ts";

export const userThunk = createAsyncThunk(
  "user/getUserData",
  async () => {
    return await fetchWithRefreshToken(userDataEndpoint, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${getAccessToken(cookie.get("access_token")!)}`
      }
    })
  }
)