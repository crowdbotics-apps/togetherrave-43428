import axios from "axios"
import { EVENT_BRIGHT_INTEGRATION_TOKEN } from "react-native-dotenv"
const events = axios.create({
  baseURL: "https://www.eventbriteapi.com/v3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${EVENT_BRIGHT_INTEGRATION_TOKEN}`
  }
})
function events_get_categories_list(payload) {
  return events.get(`/categories/`)
}
function events_get_events_event_id_attendees_read(payload) {
  return events.get(`/events/${payload.event_id}/attendees/`, {
    params: {
      status: payload.status,
      changed_since: payload.changed_since,
      last_item_seen: payload.last_item_seen,
      attendee_ids: payload.attendee_ids
    }
  })
}
export const apiService = {
  events_get_categories_list,
  events_get_events_event_id_attendees_read
}
