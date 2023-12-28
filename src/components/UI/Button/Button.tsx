import { ReactNode } from 'react'
import s from './Button.module.scss'
import { SvgGenerator } from 'utils/SvgGenerator.tsx'

type ButtonProps = {
  onClick?: () => void
} & (
  | { move: 'none'; children: ReactNode }
  | { move: 'create'; idIcon: string; children: ReactNode }
  | { move: 'delete'; idIcon: string }
)

enum Move {
  none = 'none',
  create = 'create',
  delete = 'delete',
}

export const Button = (props: ButtonProps) => {
  switch (props.move) {
    case Move.none:
      return (
        <button className={s.button} onClick={props.onClick} children={props.children} />
      )
    case Move.create:
      return (
        <button className={s.button} onClick={props.onClick}>
          {props.children}
          <SvgGenerator id={props.idIcon} />
        </button>
      )
    case Move.delete:
      return (
        <button className={s.del} onClick={props.onClick}>
          <SvgGenerator id={props.idIcon} />
        </button>
      )
    default:
      return null
  }
}
