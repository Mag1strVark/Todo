import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { ITodoList, TodoListState } from 'store/atom/TodoListState.ts'
import eventBus from 'eventBus/eventBus.ts'

export const UseTodoItem = ({ todo }: { todo: ITodoList }) => {
  const [todos, setTodos] = useRecoilState(TodoListState)

  const { id, text, isComplete } = todo

  const toggleTodo = () => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    )

    setTodos(newTodos)
  }

  const updateTodo = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const trimmed = value.trim()

    if (!trimmed) return

    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: value } : todo
    )

    setTodos(newTodos)
  }

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
    eventBus.publish('todoDeleted', todo.text)
  }

  return {
    text,
    isComplete,
    toggleTodo,
    updateTodo,
    deleteTodo,
  }
}
