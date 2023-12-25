import { useState, ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { ITodoList, TodoListState } from 'store/atom/TodoListState.ts'
import eventBus from 'eventBus/eventBus.ts'

let id = 0
const getId = () => id++

export const UseTodoCreator = () => {
  const [text, setText] = useState('')
  const setTodos = useSetRecoilState(TodoListState)

  const addTodo = () => {
    const trimmed = text.trim()

    if (!trimmed) return

    const newTodo: ITodoList = {
      id: getId(),
      text: trimmed,
      isComplete: false,
    }

    setTodos((oldTodos) => oldTodos.concat(newTodo))
    eventBus.publish('todoAdd', newTodo)
    setText('')
  }

  const changeText = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value)
  }

  return {
    text,
    addTodo,
    changeText,
  }
}
