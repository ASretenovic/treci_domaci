import React from 'react'
import oNamaImage from '../images/kontakt.jpg';
import '../styles/Kontakt.css';

function Kontakt() {
  return (
      <div className='kontakt'>
          <div className='kontaktLeftColumn'>
              <h2>Imate pitanje? Pišite nam!</h2>
              <form id='kontaktForm' method='POST'>
                  <label htmlFor='ime'>Ime i prezime</label>
                  <input name='ime' placeholder='Unesite ime i prezime...' type='text' required />
                   <label htmlFor='email'>Email adresa</label>
                  <input name='email' placeholder='Unesite email adresu...' type='email' required />
                  <label htmlFor='komentar'>Komentar</label>
                  <textarea name='komentar' rows='5' placeholder='Unesite poruku...' required></textarea>
                  <button type='submit'>Pošalji</button>
              </form>
          </div>

          <div className='kontaktRightColumn' style={{ backgroundImage : `url(${oNamaImage})` }}>
          </div>
    </div>
  )
}

export default Kontakt