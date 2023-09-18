import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const eventbright_get_events_event_id_attendees_read = createAsyncThunk(
  "eventbright_response_get_ListAttendeesByEvents/eventbright_get_events_event_id_attendees_read",
  async payload => {
    const response = await apiService.eventbright_get_events_event_id_attendees_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const eventbright_response_get_ListAttendeesByEventsSlice = createSlice({
  name: "eventbright_response_get_ListAttendeesByEvents",
  initialState,
  reducers: {},
  extraReducers: {
    [eventbright_get_events_event_id_attendees_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [eventbright_get_events_event_id_attendees_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [eventbright_get_events_event_id_attendees_read.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  eventbright_get_events_event_id_attendees_read,
  slice: eventbright_response_get_ListAttendeesByEventsSlice
}
