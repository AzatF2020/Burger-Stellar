import {createAsyncThunk} from "@reduxjs/toolkit";
import {userDataEndpoint} from "../../utils/helpers/constants/constants.ts";
import type {AxiosResponse} from "axios";
import type {TRegister} from "../types/data.ts";
import $api from "../../utils/http/http.ts";

export const profileEditThunk = createAsyncThunk(
  "profile/editUserData",
  async ({name, email, password}: {[keyof: string]: string}) => {
    try {
      const response = await $api.patch<AxiosResponse<TRegister>>(userDataEndpoint, {
        name,
        email,
        password
      })

      return response?.data
    } catch (e) {
      console.warn(e)
    }
  }
)