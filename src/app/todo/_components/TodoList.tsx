import AddTodo from './AddTodo'
import Todo from './Todo'

export default function TodoList() {
  return (
    <section className="bg-bg flex h-full min-h-0 flex-col">
      <Todo />
      <AddTodo />
    </section>
  )
}
