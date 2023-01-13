import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <section className='Cus_Contact'>
    <div className='Contact_Info'>
      <h2 className='text-light'>Contact info</h2>
      <div>
      <h4 className='text-light'>Contact us</h4>
      <h5 className='text-light'>
          KP, IT Park Abbottabad<br/>
          contact@pixelio.tech<br/>
          +92-311-6993741
          </h5>
          </div>
          <div className='text-light mr-5'>
          <h4>
            Reach us at <br/>
            <AiFillLinkedin/>
            <AiFillFacebook/>
            <AiFillTwitterSquare/>
            <FaInstagramSquare/>
          </h4>
        </div>

    </div>
    <div className='Contact_Us'>
      <h2 className='ml-5 mt-4'>Contact Us</h2>
      <form className='bg-transparent col-sm-5'>
    <input type="text" className="input-size_2 bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="What is your name? "></input>
    <input type="text" className="input-size_2 bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="What is your email? "></input>
    <input type="text" className="input-size_2 bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 mt-5 " placeholder="Write your message here? "></input>
    </form>
    <Button variant="btn btn-dark btn-lg Contact_btn rounded-0 mt-5">SEND MESSAGE</Button>
    </div>
    </section>
  )
}

export default Contact
