import { useRecoilState } from 'recoil'
import { todoListFilterState } from 'store/atom/TodoListState.ts'
import { ChangeEvent } from 'react'
import s from './TodoFilter.module.scss'

const TodoFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const changeFilter = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setFilter(value)
  }

  return (
    <div className={s.container}>
      <span>Фильтр:</span>
      <select value={filter} onChange={changeFilter}>
        <option value="Show All">Все</option>
        <option value="Show Completed">Выполненные</option>
        <option value="Show Active">Активные</option>
      </select>
    </div>
  )
}

export default TodoFilter
