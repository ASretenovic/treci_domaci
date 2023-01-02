import React from 'react'

function ProizvodiItem({slika, naziv, cena}) {
  return (
      <div className='proizvodiItem'>
          <div style={{ backgroundImage : `url(${slika})` }}> </div>
          <h1>{naziv}</h1>
          <p>{cena} din.</p>
    </div>
  )
}

export default ProizvodiItem