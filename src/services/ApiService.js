import axios from 'axios'
import { API_URL } from "@/services/constants"

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  params: {
    'key': process.env.VUE_APP_API_KEY,
  }
})

const ApiService = {
  async get(resource, params) {
    try {
      return await api.get(resource, { params })
    } catch (error) {
      throw new Error(`ApiService ${error}`)
    }
  },
}

export default ApiService

export const VideoService = {
  async get(params) {
    if (!params.maxResults) {
      params.maxResults = 12
    }
    if (!params.chart) {
      params.chart = 'mostPopular'
    }
    try {
      return await ApiService.get('/search', params)
    } catch (error) {
      console.error(error)
    }
  },

  async getDetailed(params) {    
    try {
      if (!params.part) {
        params.part = 'snippet,statistics'
      }
      return await ApiService.get('/videos', params)
    } catch (error) {
      console.error(error)
    }
  },
}