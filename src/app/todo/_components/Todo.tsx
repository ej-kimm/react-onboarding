'use client'

import useTodos from '@/hooks/useTodos'
import type { Todo } from '@/types/todo'
import { ChangeEvent } from 'react'

export default function Todo() {
  const {
    todosQuery: { data: todos = [], isPending },
    updateItem,
  } = useTodos()

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: Todo['id'],
  ) => {
    const completed = e.target.checked
    updateItem.mutate({ id, completed })
  }

  if (isPending) return <p>로딩중...</p>

  return (
    <ul>
      {todos.map(({ id, title, completed }: Todo) => (
        <li key={id}>
          <input
            id={id}
            type="checkbox"
            checked={completed}
            onChange={(e) => handleInputChange(e, id)}
          />
          <label htmlFor={id}>{title}</label>
        </li>
      ))}
    </ul>
  )
}
