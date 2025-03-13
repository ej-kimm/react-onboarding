import axios from 'axios'

const TODO_API_URL = 'http://localhost:3001/todos' // TODO : 임시 API 변경필요

const instance = axios.create({
  baseURL: TODO_API_URL,
})

export default instance
