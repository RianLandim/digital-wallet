import axios from "axios"

export const api = axios.create({
  baseURL: 'http://192.168.143.13:5432'
})
