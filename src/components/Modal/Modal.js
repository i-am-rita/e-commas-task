import React from 'react'
import Modal from 'react-modal';


export default function Modals({chilldren, isOpen}) {
console.log(isOpen, '???')
  return (
    <Modal open={isOpen}>
    {chilldren}
    </Modal>
  )
}
