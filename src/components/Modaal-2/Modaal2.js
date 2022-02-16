import React from 'react'
import Modal from 'react-modal'
import './Modaal2.css'
import stepper1 from '../../images/Stepper1.png'

export default function Modaal2(props) {
    const modalStyle = {
        overlay: {
          border: 'none',
          backgroundColor: '#2222224D',
        }
      }
    return (
        <>
             <Modal isOpen={props.open} style={modalStyle}>
    <div className='modalStyles'>
    <i class="fa-solid fa-arrow-left return-button"  onClick={() => props.close(false)}></i>
    {/* <button className='cancel-button' onClick={() => props.close(false)}>X</button> */}
      <i class="fas fa-close cancel-button" onClick={() => props.close(false)}></i>
      <div className='make-payment'>
        <h2>Make Payment</h2>
        <img src={stepper1} alt='' className='image' />
      </div>
      </div>
            </Modal>
        </>
    )
}
