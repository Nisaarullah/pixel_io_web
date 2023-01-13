
import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Contact from './Pages/Contact'
import Hire from './Pages/Hire'
import "./Components/style.css"
import "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>
      <Router>
      <Header />
        <Routes>
         

          
          <Route path="/" element={<Content />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Hire" element={<Hire />}/>

         
        </Routes>
        
      </Router>
    </>

  );
}

export default App;
