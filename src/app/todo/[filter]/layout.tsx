import AddTodo from './_components/AddTodo'
import Header from './_components/Header'

export default function FilteredTodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-3/5 w-full max-w-[500px] flex-col overflow-hidden rounded-2xl shadow-2xl">
      <Header />
      <section className="bg-bg flex h-full min-h-0 flex-col">
        <main className="scrollbar my-2 flex-auto overflow-y-auto sm:my-5">
          {children}
        </main>
        <AddTodo />
      </section>
    </div>
  )
}
