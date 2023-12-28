import { FC, InputHTMLAttributes } from 'react'
import s from './Input.module.scss'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...otherProps }) => {
  return <input className={s.input} {...otherProps} />
}
