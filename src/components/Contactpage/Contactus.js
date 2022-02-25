import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import bluebg from '../../images/bluebg.png'
import callUs from '../../images/callUs.png'
import './Contactus.css'
export default function Contactpage() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().max(15, "Must be 15 characters or less")
      .required("Required"),
      lastName: Yup.string().max(10, "Must be 10 characters or less").required('required'),
      message: Yup.string()
      .required("Required"),
    }),
    onSubmit: (values) => {
      // e.preventDefault()
      const details = {};
      // console.log(values);
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(details)
      }).then(() =>{
        console.log('new detail added')
      })
    }
    // onSubmit: values => {
    //   console.log('form values', values)
    // }
  });
  // console.log('form values',formik.values)
  // console.log(formik.touched)  
  // console.log(formik.values)
  // const formik = Formik
  return (
    <>
      <button className='buttondeal'>
        <p><span>Home</span> / Hot Deal </p>
      </button>
      <div className='contact-us'>
        <div className='bluebackg'>
          <div>
            <img src={callUs} alt='' className='girlimg' />
          </div>
          <div className='addres'>
            <h1>get in <br /> touch</h1>
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>20 Prince Hakerem Lekki <br />Phase 1, Lagos</p>
          </div>
        </div>

        <div className="enter-details">
          {/* {({handleSubmit, handleChange, handleBlur, values}) => ( */}
          <form onSubmit={formik.handleSubmit}>
            <div className="enter-detail">
              <input
                id="fname"
                type="text"
                name="firstName"
                placeholder="Your name.."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.firstName}
              />
              {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
            </div>
            <div className="enter-detail">
              <input
                id="lname"
                type="text"
                name="lastName"
                placeholder="Your last name.."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.lastName}
              />
              {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
            </div>
            <div className="enter-detail">
              <textarea
                id="message"
                type="text"
                name="message"
                placeholder="Type Message here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.message}
              >
              </textarea>
            </div>
            <div>
            </div>
            <button type='submit' className='submit'> Submit</button>
          </form>
          {/* )} */}

        </div>
      </div>
      {/* <div className='butto'>
        <input type='search' placeholder='Search query...'/>
        <button>Search</button>
        </div> */}
    </>
  )
}
