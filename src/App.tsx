import s from './App.module.scss'
import TodoCreator from './components/TodoCreator/TodoCreator.tsx'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState, ITodoList } from 'store/atom/TodoListState.ts'
import TodoItem from 'components/TodoItem/TodoItem.tsx'
import TodoFilter from 'components/TodoFilter/TodoFilter.tsx'
import TodoStats from 'components/TodoStats/TodoStats.tsx'
import Clipboard from 'assets/icon/Clipboard.svg'
import TodoSearch from 'components/TodoSearch/TodoSearch.tsx'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import eventBus from 'eventBus/eventBus.ts'

const App = () => {
  const todos = useRecoilValue(filteredTodoListState)

  useEffect(() => {
    const handleTodoAdded = (newTodo: ITodoList) => {
      toast(`Создана новая задача: ${newTodo.text}`)
    }

    const handleTodoDeleted = (todoText: string) => {
      toast(`Удалена задача: ${todoText}`)
    }

    eventBus.subscribe('todoAdd', handleTodoAdded)
    eventBus.subscribe('todoDeleted', handleTodoDeleted)

    return () => {
      eventBus.unsubscribe('todoAdd', handleTodoAdded)
      eventBus.unsubscribe('todoDeleted', handleTodoDeleted)
    }
  }, [])

  return (
    <div className={s.container}>
      <TodoStats />
      <div className={s.header}>
        <h2>TODO</h2>
      </div>
      <div className={s.main}>
        <TodoCreator />
        <div className={s.top}>
          <TodoFilter />
          <TodoSearch />
        </div>
        {todos.length == 0 ? (
          <>
            <div className={s.info}>
              <img src={Clipboard} alt="clipboard" />
              <p>У вас еще нет зарегистрированных задач</p>
              <span>Создавайте задачи и упорядочивайте свои дела</span>
            </div>
          </>
        ) : (
          <>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default App
