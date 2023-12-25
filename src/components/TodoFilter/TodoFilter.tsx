import { useRecoilState } from 'recoil'
import { todoListFilterState } from 'store/atom/TodoListState.ts'
import s from './TodoFilter.module.scss'

enum Filter {
  all = 'Show All',
  completed = 'Show Completed',
  active = 'Active',
}

const TodoFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  return (
    <div className={s.container}>
      <span>Фильтр:</span>
      <div className={s.selectContainer}>
        <div
          className={filter === Filter.all ? s.selectedOption : s.option}
          onClick={() => setFilter(Filter.all)}
        >
          Все
        </div>
        <div
          className={filter === Filter.completed ? s.selectedOption : s.option}
          onClick={() => setFilter(Filter.completed)}
        >
          Выполненные
        </div>
        <div
          className={filter === Filter.active ? s.selectedOption : s.option}
          onClick={() => setFilter(Filter.active)}
        >
          Активные
        </div>
      </div>
    </div>
  )
}

export default TodoFilter
