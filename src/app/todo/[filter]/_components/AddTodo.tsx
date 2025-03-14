'use client'

import { Button, InputField } from '@/components/common'
import useTodos from '@/hooks/useTodos'
import type { Todo } from '@/types/todo'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function AddTodo() {
  const [title, setTitle] = useState<Todo['title']>('')
  const { addItem } = useTodos()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (title.trim().length === 0) return
    addItem.mutate(
      { id: uuidv4(), title: title.trim(), completed: false },
      {
        onSuccess: () => {
          setTitle('')
        },
      },
    )
  }

  return (
    <form
      className="bg-bg-dark flex w-full px-4 py-[22px]"
      onSubmit={handleAddTodo}
    >
      <InputField
        className="flex-1 rounded-tl-lg rounded-bl-lg bg-white px-4 py-2 text-2xl"
        type="text"
        value={title}
        placeholder="Add Todo"
        onChange={handleInputChange}
      />
      <Button
        className="rounded-tl-none rounded-bl-none text-2xl transition-[filter] duration-300 ease-in-out hover:brightness-110"
        type="submit"
        variant="primary"
      >
        Add
      </Button>
    </form>
  )
}
