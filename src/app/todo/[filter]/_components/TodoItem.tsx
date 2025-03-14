'use client'

import { Button, InputField } from '@/components/common'
import useTodos from '@/hooks/useTodos'
import type { Todo } from '@/types/todo'
import { ChangeEvent, useState } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import { FaCheck, FaTrash } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

type TodoItemProps = {
  item: Todo
}

export default function TodoItem({ item }: TodoItemProps) {
  const { id, title, completed } = item
  const { updateItem, removeItem } = useTodos()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editTitle, setEditTitle] = useState<Todo['title']>(title)

  const toggleEditMode = () => {
    setIsEditing((editing) => !editing)
    setEditTitle(title)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    if (name === 'status') {
      updateItem.mutate({ id, completed: checked }) // 'completed' 상태 업데이트
      return
    }
    setEditTitle(value)
  }

  const handleUpdate = () => {
    if (editTitle.trim().length === 0) {
      setIsEditing(false)
      return
    }
    updateItem.mutate(
      { id, title: editTitle.trim() },
      {
        onSuccess: () => {
          setIsEditing(false)
        },
      },
    )
  }

  const handleDelete = () => {
    removeItem.mutate(id)
  }

  return (
    <li
      key={id}
      className="my-0.5 flex items-center justify-between px-3.5 py-1 sm:px-4 sm:py-2"
    >
      {!isEditing && (
        <input
          className="h-4 w-4 shrink-0 cursor-pointer sm:h-6 sm:w-6"
          id={id}
          type="checkbox"
          name="status"
          checked={completed}
          onChange={handleInputChange}
        />
      )}
      {isEditing ? (
        <InputField
          type="text"
          name="title"
          value={editTitle}
          placeholder="Editing Todo..."
          onChange={handleInputChange}
          className="focus:ring-accent bg-bg-dark mr-3 min-w-0 flex-auto rounded-md border px-2 py-0.5 text-base font-medium transition-all duration-200 ease-in-out focus:ring-2 sm:px-3 sm:text-xl"
        />
      ) : (
        <label
          htmlFor={id}
          title={title}
          className={`ml-2 flex-auto cursor-pointer truncate text-lg font-medium transition-all ease-in-out sm:ml-3 sm:text-2xl ${completed ? 'text-gray line-through' : 'text-text'}`}
        >
          {title}
        </label>
      )}

      <div className="flex items-center justify-end gap-1.5">
        <Button
          type="button"
          variant="icon"
          onClick={isEditing ? handleUpdate : toggleEditMode}
        >
          {isEditing ? (
            <FaCheck className="text-sm sm:text-base" />
          ) : (
            <BsPencilFill className="text-[13px] sm:text-base" />
          )}
        </Button>
        <Button
          type="button"
          variant="icon"
          onClick={isEditing ? toggleEditMode : handleDelete}
        >
          {isEditing ? (
            <IoClose className="stroke-30 text-lg sm:text-[19px]" />
          ) : (
            <FaTrash className="text-xs sm:text-[13px]" />
          )}
        </Button>
      </div>
    </li>
  )
}
