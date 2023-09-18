import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const ticketmasterapi_get_v2_eventsjson_list = createAsyncThunk(
  "ticketmasterapi_response_get_SearchEvents/ticketmasterapi_get_v2_eventsjson_list",
  async payload => {
    const response = await apiService.ticketmasterapi_get_v2_eventsjson_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ticketmasterapi_response_get_SearchEventsSlice = createSlice({
  name: "ticketmasterapi_response_get_SearchEvents",
  initialState,
  reducers: {},
  extraReducers: {
    [ticketmasterapi_get_v2_eventsjson_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [ticketmasterapi_get_v2_eventsjson_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [ticketmasterapi_get_v2_eventsjson_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  ticketmasterapi_get_v2_eventsjson_list,
  slice: ticketmasterapi_response_get_SearchEventsSlice
}
