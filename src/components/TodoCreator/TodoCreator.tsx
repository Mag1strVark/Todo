import { UseTodoCreator } from './hooks/useTodoCreator.ts'
import { Input } from 'components/UI/Input/Input.tsx'
import { CreateButton } from 'components/UI/CreateButton/CreateButton.tsx'
import s from './TodoCreator.module.scss'

const TodoCreator = () => {
  const { text, addTodo, changeText } = UseTodoCreator()

  return (
    <div className={s.container}>
      <Input
        placeholder={'Введите название'}
        type="text"
        value={text}
        onChange={changeText}
      />
      <CreateButton onClick={addTodo} />
    </div>
  )
}

export default TodoCreator
