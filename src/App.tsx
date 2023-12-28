import s from './App.module.scss'
import { SvgGenerator } from 'utils'
import { lazy, Suspense } from 'react'
import TodoCreate from 'components/todoCreate/todoCreate.tsx'
const TodoList = lazy(() => import('components/todoList/todoList.tsx'))
const TodoStats = lazy(() => import('components/todoStats/todoStats.tsx'))
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
        <Suspense fallback={<p>Загрузка...</p>}>
          <TodoStats />
          <TodoList />
        </Suspense>
      </div>
    </div>
  )
}

export default App
