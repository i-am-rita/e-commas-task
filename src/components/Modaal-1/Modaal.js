import React from 'react';
// import Modal from 'react-modal';
import './Modaal.css'
import stepper from '../../images/Stepper.png'
import Modaal2 from '../Modaal-2/Modaal2';
import Modals from '../Modal/Modal';
import Cart from '../Cart/Cart';

export default function Modaal({props}) {
  // const [openModal, setOpenModal] = useState(false)
  const modalStyle = {
    overlay: {
      border: 'none',
      backgroundColor: '#2222224D',
    }
  }
  //   if(!props.rita) {
  //     return  ''
  // }
  return <>
    <Modals style={modalStyle}>
      <div className='modalStyles'>
        <i class="fa-solid fa-arrow-left return-button" onClick={() => props.close(false)}></i>
        <i class="fas fa-close cancel-button" onClick={props.handleCloseModal}></i>
        <div className='make-payment'>
          <h2>Make Payment</h2>
          <img src={stepper} alt='' className='image' />
        </div>
        <div className='modalContainer'>
          <div className='left-grid'>
            <div className='input-button'>
              <label className='label'></label>
              <input type='search' placeholder='First Name' />
            </div>
            <div className='input-button'>
              <label className='label'></label>
              <input type='search' placeholder='Email Address' />
            </div>
            <div className='select-cards'>
              <p>Select Method of Payment</p>
              <div className='credit-card'>
                <span>
                  <button><i class="fa-regular fa-credit-card"></i><p>Credit Card or Debit </p><i class="fa-regular fa-square-check"></i></button>
                </span>
              </div>
              <div className='credit-card'>
                <button><i class="fa-regular fa-credit-card"></i><p>Paypal</p><i class="fa-regular fa-square-check"></i></button>
              </div>
              <div className='credit-card'>
                <button><i class="fa-regular fa-credit-card"></i><p>Bank Transfer</p><i class="fa-regular fa-square-check"></i></button>
              </div>
            </div>
          </div>

          <div className='right-grid'>
            <div className='input-button'>
              <input type='search' placeholder='Last Name' />
            </div>
            <div className='input-button'>
              <textarea id="subject" name="subject" placeholder="Write something.." className='message-area'></textarea>
            </div>
            <div className='input-button'>

              <input type='search' placeholder='Mobile Phone' />
            </div>
          </div>
        </div>
      </div>
      <div className='payment-button'>
        <button onClick={props.handleNext}>Go to Payment</button>
      </div>
      <Modaal2 open={props.handleOpenModal} close={props.handleCloseModal} />
    </Modals>
  </>;
}
