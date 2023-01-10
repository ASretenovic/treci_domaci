import React, { useContext } from 'react';
import { ProizvodiContext } from '../context/ProizvodiContext';
import '../styles/Kolica.css';

export const KolicaItem = (props) => {

    const { id, naziv, slika,cena, kategorija } = props.data;

    const { kolicaItems, dodajUKolica, izbrisiIzKolica } = useContext(ProizvodiContext);

  return (
      <div className='kolicaItem'>
          <img src={slika} />
          <div className='description'>
              <p>{naziv}</p>
              <p>{cena} din.</p>
              <div className='kolicinaHandler'>
                  <button onClick={() => izbrisiIzKolica(id)}> - </button>
                  <input value={kolicaItems[id]} />
                  <button onClick={() => dodajUKolica(id)}> + </button>
              </div>
          </div>
    </div>
  )
}
