import {createAsyncThunk} from "@reduxjs/toolkit";
import {userDataEndpoint} from "../../utils/helpers/constants/constants.ts";
import type {AxiosResponse} from "axios";
import type {TRegister} from "../types/data.ts";
import $api from "../../utils/http/http.ts";

export const profileThunk = createAsyncThunk(
  "profile/getUserData",
  async () => {
    try {
      const response = await $api.get<AxiosResponse<TRegister>>(userDataEndpoint, {
        withCredentials: false,
      })

      return response?.data
    } catch (e) {
      console.warn(e)
    }
  }
)