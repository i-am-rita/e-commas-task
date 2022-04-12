import React, { useState } from 'react'
import '../Redeem/StepTwo.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import stepper1 from '../../images/Stepper1.png'
import creditcard from '../../images/Rectangle.png'
import Subtract from '../../images/Subtract.png'
import visalogo from '../../images/visa-logo.png'
// import { clearCart } from '../../reduxx/Shopping/shopping-actions'
import { useDispatch } from 'react-redux'

const Step2 = ({ handleNext, handleFormer, handleBackStep}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
          cardNumber: '',
          // expiryNumber: '',
          cvvNumber: '',
          holderName: '',
        },
    
        validationSchema: Yup.object().shape({
          cardNumber: Yup.number().min(16, 'Must be 16 digits').required('required'),
          expiryNumber: Yup.number().min(4, 'must be 4 digits').required('required'),
          cvvNumber: Yup.number().min(3, 'must be 3 digits').required('required'),
          holderName: Yup.string().max(10, 'must be 10 characters or less').required('required'),
        }),
        onSubmit: (values, e) => {
          // e.preventDefault()
          console.log('form values', values)
        }
      })
      const modalStyle = {
        overlay: {
          border: 'none',
          backgroundColor: '#2222224D',
        }
      }

      const delay = () => {
        setLoading(true)
          setTimeout(() => {
              setLoading(false)
              handleNext()
              dispatch({type: 'CLEAR_CART', payload:[]})
          }, 5000);
      }

    return (

        <>
        <div className='modalStyles' style={modalStyle}>
              <i class="fa-solid fa-arrow-left return-button" onClick={handleBackStep}></i>
              {/* <button className='cancel-button' onClick={() => props.close(false)}>X</button> */}
              <i class="fas fa-close cancel-button" onClick={handleFormer}></i>
              <div className='make-payment'>
                <h2>Make Payment</h2>
                <img src={stepper1} alt='' className='image' />
              </div>
              <div className='modalContainer'>
                <div className='credit-right'>
                  <div className='creditcard'>
                    <img src={creditcard} alt='credit-card' />
                    <img src={Subtract} alt='' className='subtract' />
                    <img src={visalogo} alt='' className='visa-logo' />
                    <p className='card-number'>
                      {formik.values.cardNumber}
                    </p>
                    <p className='card-name'>{formik.values.holderName}</p>
                    <p className='card-cvv'>{formik.values.cvvNumber}</p>
                  </div>
                </div>
    
                <div className='credit-left'>
                  <form onSubmit={formik.handleSubmit}>
                    <div className='card-numb'>
                      <input
                        type='number'
                        name='cardNumber'
                        placeholder='Card Number'
                        values={formik.values.cardNumber}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {/* <div className='card-numb'>
                      <input
                        type='number'
                        name='expiryNumber'
                        placeholder='Expiry'
                        className='expiry'
                        values={formik.values.expiryNumber}
                        onChange={formik.handleChange}
                      />
                    </div> */}
    
                    <div className='card-numb'>
                      <input
                        type='number'
                        name='cvvNumber'
                        placeholder='CVV'
                        className='cvv'
                        values={formik.values.cvvNumber}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className='card-numb'>
                      <input
                        id='fname'
                        type='text'
                        name='holderName'
                        placeholder='Holder Name'
                        values={formik.values.holderName}
                        onChange={formik.handleChange}
                      />
                    </div>
                  
                    <h5> <i class="fa-regular fa-square-check"></i>  Save this credit card</h5>
                    {/* <button type='submit' className='submit'> Submit</button> */}
                  </form>
                </div>
              </div>
              <div className='confirm-button'>
            <button onClick={delay}>{loading ? 'Please Wait...' : 'Confirm'}</button>
          </div>
            </div>
            {/* <Modaal3 open={openModal} /> */}
          {/* </Modal> */}
        </>
      )
}

export default Step2;