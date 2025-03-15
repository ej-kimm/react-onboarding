import axios from 'axios'

const TODO_API_URL = 'https://melodious-cultured-nannyberry.glitch.me/todos'

const instance = axios.create({
  baseURL: TODO_API_URL,
})

export default instance
