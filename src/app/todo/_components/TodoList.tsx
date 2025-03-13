'use client'

import useTodos from '@/hooks/useTodos'
import type { Todo } from '@/types/todo'

export default function TodoList() {
  const {
    todosQuery: { data: todos, isPending },
  } = useTodos()

  if (isPending) return <p>로딩중...</p>

  return (
    <section>
      <ul>
        {todos.map((item: Todo) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}
