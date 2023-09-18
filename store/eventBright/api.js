import axios from "axios"
import { EVENT_BRIGHT_INTEGRATION_TOKEN } from "react-native-dotenv"
const eventBright = axios.create({
  baseURL: "https://www.eventbriteapi.com/v3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${EVENT_BRIGHT_INTEGRATION_TOKEN}`
  }
})
function eventbright_get_categories_list(payload) {
  return eventBright.get(`/categories/`)
}
function eventbright_get_events_event_id_attendees_read(payload) {
  return eventBright.get(`/events/${payload.event_id}/attendees/`, {
    params: {
      status: payload.status,
      changed_since: payload.changed_since,
      last_item_seen: payload.last_item_seen,
      attendee_ids: payload.attendee_ids
    }
  })
}
export const apiService = {
  eventbright_get_categories_list,
  eventbright_get_events_event_id_attendees_read
}
