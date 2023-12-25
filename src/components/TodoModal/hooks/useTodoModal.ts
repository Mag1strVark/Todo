import { useRecoilState } from 'recoil'
import { ITodoList, TodoListState } from 'store/atom/TodoListState.ts'
import eventBus from 'eventBus/eventBus.ts'

interface IProps {
  todo: ITodoList
}

export const useTodoModal = ({ todo }: IProps) => {
  const [todos, setTodos] = useRecoilState(TodoListState)
  const { id } = todo
  const updateTodo = (key: keyof ITodoList, value: string | boolean) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, [key]: value } : todo
    )

    setTodos(newTodos)
  }

  const updateTodoDate = (key: keyof ITodoList, value: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, [key]: new Date(value) } : todo
    )

    setTodos(newTodos)
  }

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
    eventBus.publish('todoDeleted', todo.text)
  }

  return {
    updateTodoDate,
    updateTodo,
    deleteTodo,
  }
}
