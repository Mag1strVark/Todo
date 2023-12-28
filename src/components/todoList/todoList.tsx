import s from './todoList.module.scss'
import { SvgGenerator } from 'utils/SvgGenerator.tsx'
import { useRecoilValue } from 'recoil'
import { todoListState } from 'store/todoListState.ts'
import TodoItem from 'components/todoItem/todoItem.tsx'
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
        <div className={s.list}>
          {todos.map((todo) => (
            <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TodoList
