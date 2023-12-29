import s from './todoItem.module.scss'
import { TodoList } from 'store/todoListState.ts'
import { Button, Checkbox } from 'components/UI'
import { useTodo } from 'hooks'
import { memo } from 'react'

const TodoItem = memo(
  (props: TodoList) => {
    const { toggleTodo, removeTodo } = useTodo()

    return (
      <div className={s.container}>
        <Checkbox checked={props.completed} onChange={() => toggleTodo(props.id)} />
        <span className={`${s.info} ${props.completed ? s.check : ''}`}>
          {props.text}
        </span>
        <Button move={'delete'} idIcon={'trash'} onClick={() => removeTodo(props.id)} />
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.completed === nextProps.completed
  }
)
export default TodoItem
