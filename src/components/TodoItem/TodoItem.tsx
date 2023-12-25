import { ITodoList } from 'store/atom/TodoListState.ts'
import { UseTodoItem } from 'components/TodoItem/hooks/useTodoItem.ts'
import s from './TodoItem.module.scss'
import Trash from 'assets/icon/Trash.svg'
import TodoModal from 'components/TodoModal/TodoModal.tsx'
import { useState } from 'react'

const TodoItem = ({ todo }: { todo: ITodoList }) => {
  const { text, isComplete, toggleTodo, deleteTodo } = UseTodoItem({
    todo,
  })
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div className={s.container}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={isComplete}
          onChange={toggleTodo}
        />
        <span
          className={`${s.info} ${isComplete ? s.check : ''}`}
          onClick={() => setShowForm(true)}
        >
          {text}
        </span>
        <button className={s.del} onClick={deleteTodo}>
          <img src={Trash} alt="trash" />
        </button>
      </div>
      <TodoModal todo={todo} showModal={showForm} setShowModal={setShowForm} />
    </>
  )
}

export default TodoItem
