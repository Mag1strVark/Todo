import s from './todoSearch.module.scss'
import { Input } from 'components/UI'
import { ChangeEventHandler } from 'react'

interface ISearchTodo {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const TodoSearch = ({ value, onChange }: ISearchTodo) => {
  return (
    <div className={s.search}>
      <Input placeholder={'Поиск'} value={value} onChange={onChange} />
    </div>
  )
}

export default TodoSearch
