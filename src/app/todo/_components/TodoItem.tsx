'use client'

import { Button } from '@/components/common'
import useTodos from '@/hooks/useTodos'
import type { Todo } from '@/types/todo'
import { ChangeEvent } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'

type TodoItemProps = {
  item: Todo
}

export default function TodoItem({ item }: TodoItemProps) {
  const { id, title, completed } = item
  const { updateItem, removeItem } = useTodos()

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const completed = e.target.checked
    updateItem.mutate({ id, completed })
  }

  const handleDelete = () => {
    removeItem.mutate(id)
  }

  return (
    <li key={id} className="my-0.5 flex items-center justify-between px-4 py-2">
      <input
        className="h-6 w-6 cursor-pointer"
        id={id}
        type="checkbox"
        checked={completed}
        onChange={handleStatusChange}
      />
      <label
        htmlFor={id}
        className={`ml-3 flex-auto cursor-pointer text-2xl font-medium transition-all ease-in-out ${completed ? 'text-gray line-through' : 'text-text'}`}
      >
        {title}
      </label>

      <div className="flex items-center justify-end gap-1.5">
        <Button type="button" variant="icon">
          <BsPencilFill />
        </Button>
        <Button type="button" variant="icon" onClick={handleDelete}>
          <FaTrash fontSize={13} />
        </Button>
      </div>
    </li>
  )
}
