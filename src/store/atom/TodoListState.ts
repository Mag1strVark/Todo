import { atom, selector } from 'recoil'

export interface ITodoList {
  id: number
  text: string
  isComplete: boolean
  description: string
  date: Date
}

export const TodoListState = atom<ITodoList[]>({
  key: 'TodoListState',
  default: [],
})

export const todoSelectDate = atom<Date | null>({
  key: 'todoSelectDate',
  default: null,
})

export const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All',
})

export const todoSearchTermState = atom<string>({
  key: 'todoSearchTermState',
  default: '',
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const todos = get(TodoListState)
    const searchTerm = get(todoSearchTermState).toLowerCase()

    let filteredTodos = todos

    if (searchTerm !== '') {
      filteredTodos = filteredTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm)
      )
    }

    switch (filter) {
      case 'Show Completed':
        return filteredTodos.filter((todo) => todo.isComplete)
      case 'Show Active':
        return filteredTodos.filter((todo) => !todo.isComplete)
      default:
        return filteredTodos
    }
  },
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todos = get(TodoListState)
    const total = todos.length
    const completed = todos.filter((todo) => todo.isComplete).length
    const active = total - completed
    const percent = total === 0 ? 100 + '%' : Math.round((completed / total) * 100) + '%'

    return {
      total,
      completed,
      active,
      percent,
    }
  },
})
