import { useTodoModal } from 'components/TodoModal/hooks/useTodoModal.ts'
import { ITodoList } from 'store/atom/TodoListState.ts'
import s from './Form.module.scss'

interface IProps {
  todo: ITodoList
}

const Form = ({ todo }: IProps) => {
  const { updateTodo, deleteTodo, updateTodoDate } = useTodoModal({ todo })
  return (
    <div className={s.form}>
      <div className={s.formGroup}>
        <label htmlFor="text">
          Статус задачи: <span>{todo.isComplete ? 'Выполнено' : 'Активная'}</span>
        </label>
      </div>
      <div className={s.formGroup}>
        <label htmlFor="text">Название задачи</label>
        <div className={s.InputBlock}>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => updateTodo('text', e.target.value)}
          />
        </div>
      </div>
      <div className={s.formGroup}>
        <label htmlFor="date">Крайний Срок</label>
        <div className={s.InputBlock}>
          <input
            type="date"
            value={todo.date ? todo.date.toISOString().split('T')[0] : ''}
            onChange={(e) => updateTodoDate('date', e.target.value)}
          />
        </div>
      </div>
      <div className={s.formGroup}>
        <label htmlFor="description">Описание задачи</label>
        <div className={s.InputBlock}>
          <textarea
            value={todo.description}
            onChange={(e) => updateTodo('description', e.target.value)}
          />
        </div>
      </div>
      <button onClick={deleteTodo}>Удалить</button>
    </div>
  )
}

export default Form
