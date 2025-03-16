import axios from 'axios'

const TODO_API_URL = process.env.TODO_API_URL || 'http://localhost:3001/todos'

const instance = axios.create({
  baseURL: TODO_API_URL,
})

export default instance
