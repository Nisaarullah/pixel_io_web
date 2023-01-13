import React from 'react'
import Button from 'react-bootstrap/Button';


function Hire() {
  return (
   
    <section className='' id='Hire'>
    <div className='perp mt-4'>
       <h2 className='Heading_size'>
          Hire your dream team now
       </h2>
       
    <form className='bg-transparent col-sm-5'>
    <input type="text" className="input-size bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="Looking for Popular skills?"></input>
    <input type="text" className="input-size bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="How many team members you need?"></input>
    <input type="text" className="input-size bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="When do you need developer to start?"></input>
    <input type="text" className="input-size bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="What is your email? "></input>
    <input type="text" className="input-size bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="What is your company Name?"></input>
    <input type="text" className="input-size bg-transparent p-4 shadow-none  border-top-0 border-left-0 border-right-0 " placeholder="Your contact number?"></input>
    </form>
    <Button variant="btn btn-dark btn-lg block rounded-0">Continue</Button>
    </div>

 </section>
  )
}

export default Hire