import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const events_get_categories_list = createAsyncThunk(
  "events_response_get_ListCategories/events_get_categories_list",
  async payload => {
    const response = await apiService.events_get_categories_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const events_response_get_ListCategoriesSlice = createSlice({
  name: "events_response_get_ListCategories",
  initialState,
  reducers: {},
  extraReducers: {
    [events_get_categories_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [events_get_categories_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [events_get_categories_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  events_get_categories_list,
  slice: events_response_get_ListCategoriesSlice
}
