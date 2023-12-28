import s from './todoStats.module.scss'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from 'store/todoListState.ts'
const TodoStats = () => {
  const { total, completed } = useRecoilValue(todoListStatsState)
  return (
    <div className={s.container}>
      <div className={s.created}>
        <p>Всего:</p>
        <span className={s.counter}>{total}</span>
      </div>
      <div className={s.done}>
        <p>Выполнено:</p>
        <span className={s.counter}>{completed}</span>
      </div>
    </div>
  )
}

export default TodoStats
