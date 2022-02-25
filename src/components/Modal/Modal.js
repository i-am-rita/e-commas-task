import React from 'react'
import Modal from 'react-modal';


export default function Modals({children, isOpen}) {
// console.log(isOpen, '???')
  return (
    <Modal isOpen={isOpen}>
    {children}
    </Modal>
  )
}
