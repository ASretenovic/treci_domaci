import React from 'react'
import { ProizvodiList } from '../handler/ProizvodiList';
import ProizvodiItem from '../components/ProizvodiItem';
import '../styles/Proizvodi.css';

function Proizvodi() {
  return (
      <div className='proizvodi'>
          <h1 className='h1proizvodi'>Naši proizvodi</h1>
           {/* prolazak kroz listu proizvoda */}
          <div className='proizvodiList'>{ProizvodiList.map((proizvodiItem, key) => {
              return <ProizvodiItem
                  key={key}
                  slika={proizvodiItem.slika}
                  naziv={proizvodiItem.naziv}
                  cena={proizvodiItem.cena} />
          })}
          </div>
    </div>
  )
}

export default Proizvodi