import { FC, InputHTMLAttributes } from 'react'
import s from './Checkbox.module.scss'

export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...otherProps
}) => {
  return (
    <div className={s.container}>
      <input className={s.checkbox} type={'checkbox'} {...otherProps} />
    </div>
  )
}
