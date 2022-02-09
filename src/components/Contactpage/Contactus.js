import React from 'react';
// import bluebg from '../../images/bluebg.png'
import callUs from '../../images/callUs.png'
import './Contactus.css'
export default function Contactpage() {
  return <>
    <button className='buttondeal'>
      <p><span>Home</span> / Hot Deal </p>
    </button>
    <div className='contact-us'>
      <div className='bluebackg'>
      <div>
      <img src={callUs} alt='' className='girlimg'/>
      </div>
      <div className='addres'>
      {/* <h2>Temi show love by sending money</h2> */}
      <h1>get in <br/> touch</h1>
      <p>contact@e-comm.ng</p>
      <p>+234 4556 6665 34</p>
      <p>20 Prince Hakerem Lekki <br />Phase 1, Lagos</p>
      </div>
      </div>
      <div class="enter-details">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
  </form>
  </div>
</div>

<div className='butto'>
        <input type='search' placeholder='Search query...'/>
        <button>Search</button>
        </div>
  </>;
}
