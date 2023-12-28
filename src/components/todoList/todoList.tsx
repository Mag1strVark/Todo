import s from './todoList.module.scss'
import { SvgSelector } from 'utils'
import { useRecoilValue } from 'recoil'
import { todoListState } from 'store/todoListState.ts'
import TodoItem from 'components/todoItem/todoItem.tsx'

interface IProps {
  value: string
}

const TodoList = ({ value }: IProps) => {
  const todos = useRecoilValue(todoListState)
  const filterTodos = todos.filter((todo) => todo.text.toLowerCase().includes(value))
  return (
    <div className={s.container}>
      {todos.length == 0 ? (
        <div className={s.empty}>
          <SvgSelector id={'clipboard'} />
          <p>У вас еще нет зарегистрированных задач</p>
          <span>Создавайте задачи и упорядочивайте свои дела</span>
        </div>
      ) : (
        <>
          <div className={s.list}>
            {filterTodos.length == 0 ? (
              <div className={s.empty}>
                <p>Ничего не найдено</p>
              </div>
            ) : (
              filterTodos.map((todo) => (
                <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default TodoList
