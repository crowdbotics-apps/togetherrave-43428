import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const eventbright_get_categories_list = createAsyncThunk(
  "eventbright_response_get_ListCategories/eventbright_get_categories_list",
  async payload => {
    const response = await apiService.eventbright_get_categories_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const eventbright_response_get_ListCategoriesSlice = createSlice({
  name: "eventbright_response_get_ListCategories",
  initialState,
  reducers: {},
  extraReducers: {
    [eventbright_get_categories_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [eventbright_get_categories_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [eventbright_get_categories_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  eventbright_get_categories_list,
  slice: eventbright_response_get_ListCategoriesSlice
}
