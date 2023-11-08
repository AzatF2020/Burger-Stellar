import {createAsyncThunk} from "@reduxjs/toolkit";
import {url} from "../../utils/helpers/constants/constants.ts";
import {TIngredient} from "../types/data.ts";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async (): Promise<TIngredient> => {
    const data = await fetch(`${url}/ingredients`)
    return data.json()
  }
)