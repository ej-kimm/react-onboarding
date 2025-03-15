import axios from 'axios'

const TODO_API_URL = process.env.TODO_API_URL

const instance = axios.create({
  baseURL: TODO_API_URL,
})

export default instance
