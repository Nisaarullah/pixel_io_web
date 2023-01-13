import React from 'react'; 
import Images from "../assets/img";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';

function Footer() {
  return (
    <section className=''>
      <div className='row cus-footer'>
        <div className='text-light'>
          <img src={Images.Logo_2} alt=''></img>
      </div>

        <div>
          <h4 className='text-light'>More Links</h4>
          <a className='text-light' href='Privacy Policy Terms & Conditions'>Privacy Policy <br/></a>
            <a className='text-light' href='Privacy Policy Terms & Conditions'>Terms & Conditions</a>
        </div>
        <div className='text-light mt-4'>
          <h4>
            Contact us
          </h4>
          <h5>
          KP, IT Park Abbottabad<br/>
          contact@pixelio.tech<br/>
          +92-311-6993741
          </h5>
        </div>
        <div className='text-light'>
          <h4>
            Reach us at <br/>
            <AiFillLinkedin/>
            <AiFillFacebook/>
            <AiFillTwitterSquare/>
            <FaInstagramSquare/>
          </h4>
        </div>
      </div>
        <div className='text-secondary custom-footer border-top'>
        <h4>
        ©  Pixel io Technologies 2022
        </h4>
        </div>

    </section>

  )
}

export default Footer;
