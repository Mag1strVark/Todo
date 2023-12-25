import { FC, ButtonHTMLAttributes } from 'react'
import Add from 'assets/icon/Plus.svg'
import s from './CreateButton.module.scss'

export const CreateButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...otherProps
}) => {
  return (
    <button className={s.def} {...otherProps}>
      <span>Добавить</span>
      <img src={Add} alt="add" />
    </button>
  )
}
