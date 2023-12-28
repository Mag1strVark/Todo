import { atom, selector } from 'recoil'

export type TodoList = {
  id: number
  text: string
  completed: boolean
}

export const todoListState = atom<TodoList[]>({
  key: 'todoListState',
  default: [],
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todos = get(todoListState)
    const total = todos.length
    const completed = todos.filter((todo) => todo.completed).length

    return {
      total,
      completed,
    }
  },
})
