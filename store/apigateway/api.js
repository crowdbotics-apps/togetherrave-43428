import axios from "axios"
const apigateway = axios.create({
  baseURL: "https://yotqlxh81k.execute-api.us-west-2.amazonaws.com/prod",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function apigateway_post__create(payload) {
  return apigateway.post(`/`, payload.data)
}
export const apiService = { apigateway_post__create }
