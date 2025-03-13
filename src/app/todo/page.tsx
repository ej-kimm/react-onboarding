import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import TodoList from './_components/TodoList'
import { getTodos } from './actions'

export default async function TodoPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex h-3/5 w-full max-w-[500px] flex-col overflow-hidden rounded-2xl shadow-2xl">
        <TodoList />
      </div>
    </HydrationBoundary>
  )
}
