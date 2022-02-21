import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
// import bluebg from '../../images/bluebg.png'
import callUs from '../../images/callUs.png'
import './Contactus.css'
export default function Contactpage() {
  const formik = useFormik({
    initialValues: {
    firstName: "", 
    lastName: "", 
   textarea: "",
  },
  validationSchema: Yup.object({
    firstName: Yup.string().min(15, "Must be 15 characters or less")
    .required("Required"),
    lastName: Yup.string().max(15, "Must be 15 characters or less")
    .required("Required"),
  }),
  onSubmit: (values) => {
    console.log(values)
  }
  });
  console.log(formik.errors)
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
      <img src={callUs} alt='' className='girlimg'/>
      </div>
      <div className='addres'>
      <h1>get in <br/> touch</h1>
      <p>contact@e-comm.ng</p>
      <p>+234 4556 6665 34</p>
      <p>20 Prince Hakerem Lekki <br />Phase 1, Lagos</p>
      </div>
      </div>
     
      

      <div class="enter-details">
    <form onSubmit={formik.handleSubmit}>
    {/* <div class="enter-details"> */}
    <input 
    id="fname"
    type="text"  
    name="firstname" 
    placeholder="Your name.."
    onChange={formik.handleChange}
    values={formik.values.firstName}
    />
    {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
    {/* </div> */}
    {/* <div class="enter-details"> */}
    <input 
    id="lname"
    type="text"  
    name="lastname" 
    placeholder="Your last name.."
    onChange={formik.handleChange}
    values={formik.values.lastName}
    />
     {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
    {/* </div> */}
    {/* <div class="enter-details"> */}
    <textarea 
    id="subject" 
    name="subject" 
    placeholder="Write something.." >
    {/* onChange={formik.handleChange}
    values={formik.values.textarea} */}
    </textarea>
    {/* </div> */}
    <button type='submit'> Submit</button>
    </form>
    </div>
    </div>
    <div className='butto'>
        <input type='search' placeholder='Search query...'/>
        <button>Search</button>
        </div>
 </>
 )
}
