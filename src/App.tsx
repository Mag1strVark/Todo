import s from './App.module.scss'
import { SvgGenerator } from 'utils'
import { lazy, Suspense } from 'react'
import TodoCreate from 'components/todoCreate/todoCreate.tsx'
import { useTodo, useDebounce } from 'hooks'
const TodoList = lazy(() => import('components/todoList/todoList.tsx'))
const TodoStats = lazy(() => import('components/todoStats/todoStats.tsx'))
const TodoSearch = lazy(() => import('components/todoSearch/todoSearch.tsx'))
const App = () => {
  const { changeText, data } = useTodo()
  const debouncedValue = useDebounce(data.text, 500)
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
          <TodoSearch value={data.text} onChange={changeText} />
          <TodoList value={debouncedValue} />
        </Suspense>
      </div>
    </div>
  )
}

export default App
