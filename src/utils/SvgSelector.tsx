import clipboard from 'assets/icon/Clipboard.svg'
import plus from 'assets/icon/Plus.svg'
import rocket from 'assets/icon/Rocket.svg'
import trash from 'assets/icon/Trash.svg'

interface IProps {
  id: string
}

enum SVGName {
  clipboard = 'clipboard',
  plus = 'plus',
  rocket = 'rocket',
  trash = 'trash',
}

export const SvgSelector = ({ id }: IProps) => {
  switch (id) {
    case SVGName.clipboard:
      return clipboard

    case SVGName.plus:
      return plus

    case SVGName.rocket:
      return rocket

    case SVGName.trash:
      return trash

    default:
      return ''
  }
}
