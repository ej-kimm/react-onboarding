'use server'

import axios from '@/lib/axios'
import type { Todo } from '@/types/todo'

export async function getTodos(): Promise<Todo[]> {
  const response = await axios.get('/')
  return response.data
}

export async function addTodo(todo: Todo): Promise<void> {
  await axios.post('/', todo)
}

export async function updateTodo(todo: Partial<Todo>): Promise<void> {
  await axios.patch(`/${todo.id}`, todo)
}

export async function removeTodo(id: Todo['id']): Promise<void> {
  await axios.delete(`/${id}`)
}
