import type { Filters } from '@/types/todo'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import Todo from './_components/Todo'
import { getTodos } from './actions'

export const dynamic = 'force-dynamic'

export default async function TodoPage({
  params,
}: {
  params: Promise<{ filter: Filters }>
}) {
  const { filter } = await params
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Todo filter={filter} />
    </HydrationBoundary>
  )
}
