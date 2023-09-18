import axios from "axios"
const ticketmasterAPI = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function ticketmasterapi_get_v2_eventsjson_list(payload) {
  return ticketmasterAPI.get(`/v2/events.json`, {
    params: { size: payload.size, apikey: payload.apikey }
  })
}
function ticketmasterapi_get_v2_eventsjson_list(payload) {
  return ticketmasterAPI.get(`/v2/events.json `, {
    params: {
      apikey: payload.apikey,
      id: payload.id,
      postalCode: payload.postalCode,
      startDateTime: payload.startDateTime,
      city: payload.city
    }
  })
}
export const apiService = {
  ticketmasterapi_get_v2_eventsjson_list,
  ticketmasterapi_get_v2_eventsjson_list
}
