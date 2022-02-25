import React, { useState} from 'react';
import Modal from 'react-modal';
import './Modaal3.css'
import stepper2 from '../../images/Stepper2.png'

// import Modaal2 from '../Modaal-2/Modaal2';
export default function MyModaal(props) {
    
    const [closeModal, setCloseModal] = useState();


    console.log(closeModal, props.open)

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
        <Modal isOpen={props.open ? props.open : props.closeModal === false ? false : false} style={modalStyle}>
        <div className='modalStyles'>
          <i class="fa-solid fa-arrow-left return-button" onClick={() => props.close(false)}></i>
          {/* <button className='cancel-button' onClick={() => props.close(false)}>X</button> */}
          <i class="fas fa-close cancel-button" ></i>
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
        <button onClick={() => {
            setCloseModal(false);
            // props.close(false);
        }}>Complete</button>
      </div>
          </div>
        </Modal>
    </>;
}
