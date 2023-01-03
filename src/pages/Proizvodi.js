import React, { useState } from 'react';
import { ProizvodiList } from '../handler/ProizvodiList';
import  ProizvodiItem from '../components/ProizvodiItem';
import '../styles/Proizvodi.css';

function Proizvodi() {

  const [data, setData] = useState(ProizvodiList);

  const filterKategorija = (nazivKategorije) => {
    const result = ProizvodiList.filter ((currentValue) => {
      return currentValue.kategorija === nazivKategorije;
    })
    setData(result);
  };

  return (
    <div className='proizvodiContainer'>

      <div className='kategorije'>
        <div>
          <h2>Kategorije</h2>
          <button className='btnKategorija' onClick={() => filterKategorija('Baštenski nameštaj')}>Baštenski nameštaj</button>
          <button className='btnKategorija' onClick={() => filterKategorija('Baštenska rasveta')}>Baštenska rasveta</button>
          <button className='btnKategorija' onClick={() => filterKategorija('Baštenski ukrasi')}>Baštenski ukrasi</button>
          <button className='btnKategorija' onClick={() => setData(ProizvodiList)}>Svi proizvodi</button>
        </div>
      </div>

      <div className='proizvodi'>
          <h1 className='h1proizvodi'>Naši proizvodi</h1>
           {/* prolazak kroz listu proizvoda */}
        <div className='proizvodiList'>{data.map((proizvodiItem, key) => {
          return (<ProizvodiItem
            key={key}
            id = {proizvodiItem.id}
            slika={proizvodiItem.slika}
            naziv={proizvodiItem.naziv}
            cena={proizvodiItem.cena}
          />
          )
        })}
          </div>
      </div>

    </div>
  )
}

export default Proizvodi