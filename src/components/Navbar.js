import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
            <div className='left-column'>
              <img src={logo}/>
            </div>

            <div className='right-column'>
              <Link to='/'>Početna</Link>
              <Link to='/proizvodi'>Proizvodi</Link>
              <Link to='/kontakt'>Kontakt</Link>
              <Link to='/oNama'>O nama</Link>
            </div>
    </div>
  )
}

export default Navbar