import { useSetRecoilState } from 'recoil'
import { todoListState } from 'store/todoListState.ts'
import { useState, ChangeEvent } from 'react'

export const useTodo = () => {
  const [data, setData] = useState({
    text: '',
    error: '',
  })
  const setTodoList = useSetRecoilState(todoListState)

  const changeText = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, text: value }))
  }

  const addTodo = () => {
    if (!data.text.trim()) {
      setData((prevData) => ({
        ...prevData,
        error: 'Название todo не может быть пустым',
      }))
      return
    }

    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: data.text,
        completed: false,
      },
    ])
    setData((prevData) => ({ ...prevData, text: '', error: '' }))
  }

  const removeTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return {
    data,
    addTodo,
    changeText,
    removeTodo,
    toggleTodo,
  }
}
