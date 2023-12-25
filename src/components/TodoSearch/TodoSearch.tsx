import s from './TodoSearch.module.scss'
import { Input } from 'components/UI/Input/Input.tsx'
import { ChangeEvent } from 'react'
import { todoSearchTermState } from 'store/atom/TodoListState.ts'
import { useRecoilState } from 'recoil'
const TodoSearch = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(todoSearchTermState)

  const handleSearchChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value)
  }

  return (
    <div className={s.container}>
      <Input
        placeholder={'Поиск Задачи'}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default TodoSearch
