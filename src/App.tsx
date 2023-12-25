import s from './App.module.scss'
import TodoCreator from './components/TodoCreator/TodoCreator.tsx'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  filteredTodoListState,
  ITodoList,
  todoSelectDate,
} from 'store/atom/TodoListState.ts'
import TodoItem from 'components/TodoItem/TodoItem.tsx'
import TodoFilter from 'components/TodoFilter/TodoFilter.tsx'
import TodoStats from 'components/TodoStats/TodoStats.tsx'
import Clipboard from 'assets/icon/Clipboard.svg'
import TodoSearch from 'components/TodoSearch/TodoSearch.tsx'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import eventBus from 'eventBus/eventBus.ts'
import { TodoCalendar } from 'components/TodoCalendar/TodoCalendar.tsx'

const App = () => {
  const todos = useRecoilValue(filteredTodoListState)
  const [date, setDate] = useRecoilState(todoSelectDate)

  const handleResetDate = () => {
    setDate(null)
  }

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

  const filteredTodos =
    date !== null
      ? todos.filter((todo) => todo.date.toDateString() == date.toDateString())
      : todos

  return (
    <div className={s.container}>
      <div className={s.block2}>
        <TodoFilter />
        {date !== null && (
          <button className={s.reset} onClick={handleResetDate}>
            Сбросить Дату
          </button>
        )}
      </div>
      <div className={s.block}>
        <TodoCalendar
          todos={todos}
          selectedDate={date}
          selectDate={(date) => setDate(date)}
        />
        <TodoStats />
      </div>
      <div className={s.header}>
        <h2>TODO</h2>
      </div>
      <div className={s.main}>
        <TodoCreator />
        <div className={s.top}>
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
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default App
