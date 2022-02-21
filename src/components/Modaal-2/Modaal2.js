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
          <i class="fa-solid fa-arrow-left return-button" onClick={() => props.close(false)}></i>
          {/* <button className='cancel-button' onClick={() => props.close(false)}>X</button> */}
          <i class="fas fa-close cancel-button" onClick={() => props.close(false)}></i>
          <div className='make-payment'>
            <h2>Make Payment</h2>
            <img src={stepper1} alt='' className='image' />
          </div>
          <div className='modalContainer'>
            <div className='right-grid'>

              <div className='input-button'>
                <textarea id="subject" name="subject" placeholder="Write something.." className='message-area'></textarea>
              </div>

            </div>

            <div className='left-grid'>
              <div className='input-button'>
                <input type='search' placeholder='Last Name' />
              </div>
              <div className='input-button'>
                <input type='search' placeholder='Last Name' />
              </div>
              <div className='input-button'>
                <input type='search' placeholder='Mobile Phone' />
              </div>
              <h5><i class="fa-regular fa-square-check"></i> Save this credit card</h5>
            </div>
          </div>
          <div className='payment-button'>
        <button>Confirm</button>
      </div>
        </div>
      </Modal>
    </>
  )
}
