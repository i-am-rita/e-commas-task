import React from "react";
import '../Redeem/StepThree.css'
import stepper2 from '../../images/Stepper2.png'

const StepThree = ({handleCloseModal, handleFormer, handleBackStep}) => {
    const modalStyle = {
        overlay: {
          border: 'none',
          backgroundColor: '#2222224D',
        }
      }
    return (

        <>

        <div className='modalStyles' style={modalStyle}>
          <i class="fa-solid fa-arrow-left return-button" onClick={handleBackStep}></i>
          {/* <button className='cancel-button' onClick={() => props.close(false)}>X</button> */}
          <i class="fas fa-close cancel-button" onClick={handleFormer}></i>
          <div className='make-payment'>
            <h2>Make Payment</h2>
            <img src={stepper2} alt='' className='image' />
          </div>

         <div className='modaalContainer'>
         <div className='submitted'>
          <i class="fa-regular fa-square-check"></i> 
          </div>
         </div>
         <h3>Success</h3>
         <div className='complete-button'>
       <button onClick={handleCloseModal}>Complete</button>
      </div>
          </div>
        </>
    )
}

export default StepThree;