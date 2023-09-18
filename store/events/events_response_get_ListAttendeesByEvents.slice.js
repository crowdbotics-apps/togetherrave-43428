import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const events_get_events_event_id_attendees_read = createAsyncThunk(
  "events_response_get_ListAttendeesByEvents/events_get_events_event_id_attendees_read",
  async payload => {
    const response = await apiService.events_get_events_event_id_attendees_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const events_response_get_ListAttendeesByEventsSlice = createSlice({
  name: "events_response_get_ListAttendeesByEvents",
  initialState,
  reducers: {},
  extraReducers: {
    [events_get_events_event_id_attendees_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [events_get_events_event_id_attendees_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [events_get_events_event_id_attendees_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  events_get_events_event_id_attendees_read,
  slice: events_response_get_ListAttendeesByEventsSlice
}
