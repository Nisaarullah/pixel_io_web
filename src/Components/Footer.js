import React from 'react'; 


function Footer() {
  return (
    <section className=''>
      <div className='row cus-footer'>
        <div className='text-light'>
          <img src='Images/Logo-2.jpg' alt=''></img>
      </div>

        <div>
          <h4 className='text-light'>More Links</h4>
          <a className='text-light' href='Privacy Policy Terms & Conditions'>Privacy Policy <br/>
            Terms & Conditions</a>
        </div>
        <div className='text-light'>
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
            Reach us at
          </h4>
        </div>
      </div>
        <div className='text-secondary text-small custom-footer border-top'>
        <h4>
        ©  Pixel io Technologies 2022
        </h4>
        </div>

    </section>

  )
}

export default Footer;
