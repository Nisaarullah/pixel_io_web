import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from "../assets/img";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <section className="navbar-light header">
      <div className="justify-content-around p-2 border-bottom">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg ">
              <img className='ml-5 mt-5' src={Images.Logo_1}  width='170px' height='45px' alt='' />

              <div className="collapse navbar-collapse justify-content-end mt-3 mr-5">
                <ul className="navbar-nav">
                  <Link to={{
                    pathname: "/",
                  }} className="nav-item text-dark mt-2 Home mr-3">
                    Home
                  </Link>

                  <Link to={{
                    pathname: "/",
                  }} className="nav-item text-dark mt-2">
                    Our vision
                  </Link>

                  <Link to={{
                    pathname: "/",
                  }} className="nav-item text-dark mt-2">
                    Services
                  </Link>

                  <Link to={{
                    pathname: "/",
                  }} className="nav-item text-dark mt-2">
                    Portfolio
                  </Link>

                  <Link to={{
                    pathname: "/Hire",
                  }} className="nav-item text-dark mt-2">
                    Hire Now!
                  </Link>

                  <Link to={{
                    pathname: "/Contact",

                  }} className="nav-item text-dark mt-2">
                    Contact
                  </Link>
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