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
    <li key={id} className="my-0.5 flex items-center justify-between px-4 py-2">
      {!isEditing && (
        <input
          className="h-6 w-6 cursor-pointer"
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
          className="focus:ring-accent bg-bg-dark mr-3 flex-auto rounded-md border px-3 py-0.5 text-xl font-medium transition-all duration-200 ease-in-out focus:ring-2"
        />
      ) : (
        <label
          htmlFor={id}
          title={title}
          className={`ml-3 flex-auto cursor-pointer truncate text-2xl font-medium transition-all ease-in-out ${completed ? 'text-gray line-through' : 'text-text'}`}
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
          {isEditing ? <FaCheck /> : <BsPencilFill />}
        </Button>
        <Button
          type="button"
          variant="icon"
          onClick={isEditing ? toggleEditMode : handleDelete}
        >
          {isEditing ? (
            <IoClose strokeWidth={30} fontSize={19} />
          ) : (
            <FaTrash fontSize={13} />
          )}
        </Button>
      </div>
    </li>
  )
}
