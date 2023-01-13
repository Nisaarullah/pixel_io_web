import React from 'react';
import Button from 'react-bootstrap/Button';
import Images from "../assets/img";
import Footer from './Footer';

function Content() {
   return (
      <div>

         <section className="" id="Home">
            <div>
               <div className="row justify-content-center">
                  <div className="">
                     <h1 className="mt-5 derd text-center"><span>Innovate.</span><br />
                        Design. Inspire.</h1>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <h3 className=" mt-4  text-secondary text-center">Bringing ideas to life with Innovation, Technology & <br/>Excellence</h3>
               </div>
            </div>
         </section>

         <section className="bg-light" id="Ourvision">
            <div className="container-fluid asd">
               <div className="row desc mt-5">
                  <div className="col-sm-12 col-md-5 mt-5">
                     <h1 className=" mt-5 text-dark">Powering the future
                        with innovative solutions</h1>
                  </div>

                  <h5 className="text-secondary mb-5 col-sm-9">Pixel io Technolgies is dedicated to driving progress through innovation and excellence.
                     We are constantly seeking out new and creative ways to solve problems and meet the needs of our customers.
                     From developing cutting-edge software applications to designing intuitive solutions, we strive to deliver the
                     best possible solutions to our clients.</h5>
               </div>

               <div className='row'>
                  <img className='mt-5' src={Images.sec_2} width='300px' height='350px' alt='' />
               </div>

            </div>
            <div>

            </div>
         </section>

         <section className="" id="services">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12 col-md-11 mt-5">
                     <h1 className="text-center mt-4 text-dark mb-3">What we do?</h1>
                     <h5 className='text-center text-secondary mb-5'>
                        We design and develop state of the art software systems using a variety of innovative and latest technologies.
                        Our years of proven experience enables us to provide services that has no match in the industry.
                     </h5>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_1} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Web Design</h5>

                        </div>



                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_2} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Web Development</h5>

                        </div>

                     </div>
                  </div>
                  <div className="col-sm-3 mb-5">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_3} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Mobile Applications</h5>

                        </div>


                     </div>


                  </div>



                  <div className="col-sm-3 mb-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_4} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Databases</h5>

                        </div>


                     </div>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="row">
               </div>
               <div className="row">
                  <div className="col-sm-3">
                     <div className="cus-card  mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_5} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Graphic Design</h5>

                        </div>


                     </div>
                  </div>

                  <div className="col-sm-3 mb-5">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_6} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">UI/UX Design</h5>

                        </div>

                     </div>
                  </div>
                  <div className="col-sm-3 mb-5">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_7} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Machine Learning</h5>

                        </div>


                     </div>

                  </div>
                  <div className="col-sm-3 mb-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_8} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Data Science</h5>

                        </div>


                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
               </div>
               <div className="row">
                  <div className="col-sm-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_9} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Branding</h5>

                        </div>


                     </div>
                  </div>
                  <div className="col-sm-3 mb-5">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_10} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Content Writing</h5>

                        </div>

                     </div>
                  </div>
                  <div className="col-sm-3 mb-5">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_11} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Digital Marketing</h5>

                        </div>


                     </div>

                  </div>
                  <div className="col-sm-3 mb-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_12} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Software Maintenance</h5>

                        </div>


                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
               </div>
               <div className="row">
                  <div className="col-sm-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_13} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Augmented Reality</h5>

                        </div>


                     </div>
                  </div>

                  <div className="col-sm-3 mb-5">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_14} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Virtual Reality</h5>

                        </div>

                     </div>
                  </div>
                  <div className="col-sm-3 mb-5">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_15} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">API Development</h5>

                        </div>


                     </div>

                  </div>
                  <div className="col-sm-3 mb-3">
                     <div className="cus-card mt-4">
                        <div className='d-flex justify-content-center mt-5'>
                           <img src={Images.card_16} alt="" />
                        </div>
                        <div className="card-body">
                           <h5 className="d-flex justify-content-center mb-5">Project Management</h5>

                        </div>


                     </div>
                  </div>
               </div>
            </div>

         </section>





         <section className="bg-light mt-5" id="Portfolio">
            <div className="container">
               <div className="row text-center ">
                  <div className="col-sm-12 col-md-12 mb-4 mt-5">
                     <h1 className="text-center mt-4 text-dark mt-5">Our successful projects</h1>
                     <h5 className='ml-5 col-md-11 text-secondary'>We design and develop state of the art software systems using a variety of innovative and latest technologies.
                        Our years of proven experience enables us to provide services that has no match in the industry.</h5>
                  </div>
                  <div className='row'>
                     <div className='ml-5'>
                        <img src={Images.image_1} alt="" />
                     </div>
                     <div>
                        <img src={Images.image_2}  alt="" />
                     </div>
                     <div>
                        <img src={Images.image_3}  alt="" />
                     </div>
                  </div>
                  <div className='row'>
                     <div className='ml-5'>
                        <img src={Images.image_4}  alt="" />
                     </div>
                     <div>
                        <img src={Images.image_5}  alt="" />
                     </div>
                     <div>
                        <img src={Images.image_6}  alt="" />
                     </div>
                     <div className='mt-5 col-sm-12'>
                        <Button variant="btn btn-dark b btn-lg mb-5 rounded-0">LOAD MORE</Button>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section className='' id='Hire Now!'>
            <div className="">
               <div className='row text-center justify-content-center'>
                  <div className="mt-5 col-sm-8 col-md-5">
                     <h1 >
                        We provide remotely
                     </h1>
                     <h5 className='text-secondary'>
                     We have qualified and trained resources of all levels. We can dedicate as many 
                     engineers/creators as you want for your project at our space for remote work with a possibility 
                     to manage your work too.
                     </h5>
                     <Button variant="btn btn-dark b btn-lg mt-3 rounded-0 mb-5">HIRE NOW</Button>
                  </div>
               </div>
            </div>
         </section>

          <Footer/>

      </div>
   );
}

export default Content;