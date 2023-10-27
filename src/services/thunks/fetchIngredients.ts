import {createAsyncThunk} from "@reduxjs/toolkit";
import {url} from "../../helpers/constants/constants.ts";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const data = await fetch(`${url}/ingredients`)
    return data.json()
  }
)