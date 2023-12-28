import { SvgSelector } from 'utils/SvgSelector.tsx'

interface IProps {
  id: string
}

export const SvgGenerator = ({ id }: IProps) => {
  const selectId = SvgSelector({ id })
  return <img src={selectId} alt="icon" />
}
