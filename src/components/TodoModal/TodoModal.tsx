import s from './TodoModal.module.scss'
import { Dispatch, SetStateAction } from 'react'
import Form from 'components/TodoModal/Form/Form.tsx'
import { ITodoList } from 'store/atom/TodoListState.ts'

interface IModal {
  todo: ITodoList
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

const TodoModal = ({ todo, setShowModal, showModal }: IModal) => {
  const closeForm = () => {
    setShowModal(false)
  }
  return (
    <>
      {showModal && (
        <div className={s.container} onClick={() => setShowModal(false)}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <button className={s.close} onClick={closeForm}>
              X
            </button>
            <Form todo={todo} />
          </div>
        </div>
      )}
    </>
  )
}

export default TodoModal
