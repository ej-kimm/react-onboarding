import {
  addTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from '@/app/todo/[filter]/actions'
import type { Todo } from '@/types/todo'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function useTodos() {
  const queryClient = useQueryClient()

  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  const addItem = useMutation({
    mutationFn: (todo: Todo) => addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const updateItem = useMutation({
    mutationFn: (todo: Partial<Todo>) => updateTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const removeItem = useMutation({
    mutationFn: (id: Todo['id']) => removeTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return { todosQuery, addItem, updateItem, removeItem }
}
