'use server'

import axios from '@/lib/axios'
import type { Todo } from '@/types/todo'

export async function getTodos() {
  const response = await axios.get('/todos')
  return response.data
}

export async function addTodo(todo: Todo) {
  const response = await axios.post('/todos', todo)
  return response.data
}
