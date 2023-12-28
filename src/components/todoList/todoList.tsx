import s from './todoList.module.scss'
import { SvgGenerator } from 'utils/SvgGenerator.tsx'
import { useRecoilValue } from 'recoil'
import { todoListState } from 'store/todoListState.ts'
import { lazy, Suspense } from 'react'
const TodoItem = lazy(() => import('components/todoItem/todoItem.tsx'))

const TodoList = () => {
  const todos = useRecoilValue(todoListState)
  return (
    <div className={s.container}>
      {todos.length == 0 ? (
        <div className={s.empty}>
          <SvgGenerator id={'clipboard'} />
          <p>У вас еще нет зарегистрированных задач</p>
          <span>Создавайте задачи и упорядочивайте свои дела</span>
        </div>
      ) : (
        <Suspense fallback={<p>Загрузка...</p>}>
          <div className={s.list}>
            {todos.map((todo) => (
              <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
            ))}
          </div>
        </Suspense>
      )}
    </div>
  )
}

export default TodoList
