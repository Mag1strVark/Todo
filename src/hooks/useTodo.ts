import { useSetRecoilState } from 'recoil'
import { todoListState } from 'store/todoListState.ts'
import { FormEvent, useState } from 'react'

export const useTodo = () => {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const changeText = (event: FormEvent) => {
    event.preventDefault()
    const input = event.target as HTMLInputElement
    setText(input.value)
  }

  const addTodo = () => {
    if (!text.trim()) {
      setError('Название todo не может быть пустым')
      return
    }

    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ])
    setText('')
    setError('')
  }

  const removeTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id != id))
  }

  const toggleTodo = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return {
    text,
    addTodo,
    changeText,
    removeTodo,
    toggleTodo,
    error,
  }
}
