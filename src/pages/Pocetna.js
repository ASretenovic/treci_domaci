import React from 'react'
import '../styles/Pocetna.css';
import coverImage from '../images/cover5.jpg';
import { Link } from 'react-router-dom';

function Pocetna() {
  return (
    <div className='pocetna' style={{ backgroundImage : `url(${coverImage})` }}>
      <div className='headerContainer' >
        <h1> Milsan baštenski svet </h1>
        <p> Mesto gde Vaša bašta iz snova postaje stvarnost </p>
        <Link to='/kategorije'>
          <button> Otkrijte Milsan kategorije </button>
        </Link>
      </div>
    </div>
  )
}

export default Pocetna