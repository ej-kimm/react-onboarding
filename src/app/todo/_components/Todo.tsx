'use client'

import useTodos from '@/hooks/useTodos'
import type { Todo } from '@/types/todo'
import { ChangeEvent } from 'react'
import { FaTrash } from 'react-icons/fa'

export default function Todo() {
  const {
    todosQuery: { data: todos = [], isPending },
    updateItem,
    removeItem,
  } = useTodos()

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: Todo['id'],
  ) => {
    const completed = e.target.checked
    updateItem.mutate({ id, completed })
  }

  const handleDelete = (id: Todo['id']) => {
    removeItem.mutate(id)
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
          <span>
            <button type="button" onClick={() => handleDelete(id)}>
              <FaTrash />
            </button>
          </span>
        </li>
      ))}
    </ul>
  )
}
