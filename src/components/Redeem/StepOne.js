import React from 'react'
import '../Redeem/StepOne.css'
import stepper from '../../images/Stepper.png'
const StepOne = ({ handleNext, handleFormer, handleBackStep1}) => {
    const modalStyle = {
        overlay: {
          border: 'none',
          backgroundColor: '#2222224D',
        }
      }
    return (
        <>
            <div className='modalStyles' style={modalStyle}>
        <i class="fa-solid fa-arrow-left return-button" onClick={() => handleBackStep1()} ></i>
        <i class="fas fa-close cancel-button" onClick={handleFormer}></i>
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
        <button onClick={handleNext}>Go to Payment</button>
      </div>
        </>
    )
}
export default StepOne;
