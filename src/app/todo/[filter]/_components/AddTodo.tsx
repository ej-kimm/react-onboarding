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
      className="bg-bg-dark flex w-full p-4 sm:py-[22px]"
      onSubmit={handleAddTodo}
    >
      <InputField
        className="w-full flex-auto rounded-tl-lg rounded-bl-lg bg-white px-2 text-lg sm:px-4 sm:text-2xl"
        type="text"
        value={title}
        placeholder="Add Todo"
        onChange={handleInputChange}
      />
      <Button
        className="rounded-tl-none rounded-bl-none text-lg transition-[filter] duration-300 ease-in-out hover:brightness-110 sm:text-2xl"
        type="submit"
        variant="primary"
      >
        Add
      </Button>
    </form>
  )
}
