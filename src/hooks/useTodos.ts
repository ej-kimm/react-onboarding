import { getTodos } from '@/app/todo/actions'
import { useQuery } from '@tanstack/react-query'

export default function useTodos() {
  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  })

  return { todosQuery }
}
