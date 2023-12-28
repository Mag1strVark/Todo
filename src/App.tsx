import s from './App.module.scss'
import { SvgGenerator } from 'utils'
import TodoStats from 'components/todoStats/todoStats.tsx'
import TodoList from 'components/todoList/todoList.tsx'
import TodoCreate from 'components/todoCreate/todoCreate.tsx'

const App = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.logo}>
          <SvgGenerator id={'rocket'} />
          <h1>
            to<span>do</span>
          </h1>
        </div>
      </div>
      <TodoCreate />
      <div className={s.main}>
        <TodoStats />
        <TodoList />
      </div>
    </div>
  )
}

export default App
