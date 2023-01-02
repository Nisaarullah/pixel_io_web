import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <section className="navbar-light header">
      <div className="justify-content-around p-2 border-bottom">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg ">
            <img className='ml-5 mt-5' src='Images/logo-1.jpg' width='170px' height='45px' alt='' />

              <div className="collapse navbar-collapse justify-content-end mt-3 d-grid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#Home">Home<span class="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#Our vision">Our vision<span class="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#services">Services<span class="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#Portfolio">Portfolio<span class="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#careers">Careers<span class="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="Contact us">Contact us<span class="sr-only"></span></a>
                  </li>
                </ul>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;