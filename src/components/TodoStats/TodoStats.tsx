import { todoListStatsState } from 'store/atom/TodoListState.ts'
import { useRecoilValue } from 'recoil'
import s from './TodoStats.module.scss'

const TodoStats = () => {
  const { total, completed, active, percent } = useRecoilValue(todoListStatsState)

  return (
    <div className={s.container}>
      <h2>Статистика</h2>
      <ul>
        <li>Общее количество задач: {total}</li>
        <li>Количество выполненных задач: {completed}</li>
        <li>Количество активных задач: {active}</li>
        <li>Процент выполненных задач: {percent}</li>
      </ul>
    </div>
  )
}

export default TodoStats
