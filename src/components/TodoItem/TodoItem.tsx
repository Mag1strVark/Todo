import { ITodoList } from 'store/atom/TodoListState.ts'
import { UseTodoItem } from 'components/TodoItem/hooks/useTodoItem.ts'
import s from './TodoItem.module.scss'
import Trash from 'assets/icon/Trash.svg'

const TodoItem = ({ todo }: { todo: ITodoList }) => {
  const { text, isComplete, toggleTodo, updateTodo, deleteTodo } = UseTodoItem({
    todo,
  })

  return (
    <div className={s.container}>
      <input
        className={s.checkbox}
        type="checkbox"
        checked={isComplete}
        onChange={toggleTodo}
      />
      <input
        className={`${s.input} ${isComplete ? s.check : ''}`}
        type="text"
        value={text}
        onChange={updateTodo}
      />
      <button className={s.del} onClick={deleteTodo}>
        <img src={Trash} alt="trash" />
      </button>
    </div>
  )
}

export default TodoItem
