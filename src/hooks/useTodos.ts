import { addTodo, getTodos } from '@/app/todo/actions'
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

  return { todosQuery, addItem }
}
