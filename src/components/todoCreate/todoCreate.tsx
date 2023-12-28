import s from './todoCreate.module.scss'
import { useTodo } from 'hooks'
import { Button, Input } from 'components/UI'

const TodoCreate = () => {
  const { changeText, addTodo, text, error } = useTodo()

  return (
    <div className={s.newTask}>
      <div className={s.create}>
        <Input placeholder={'Введите название'} value={text} onChange={changeText} />
        <Button move={'create'} idIcon={'plus'} children={'Добавить'} onClick={addTodo} />
      </div>
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}

export default TodoCreate
