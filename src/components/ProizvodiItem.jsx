import React, { useContext } from 'react';
import { ProizvodiContext } from '../context/ProizvodiContext';

function ProizvodiItem({ id, slika, naziv, cena }) {
  const { dodajUKolica, kolicaItems } = useContext(ProizvodiContext);

  const kolicaBrojProizvoda = kolicaItems[id];

  return (
      <div className='proizvodiItem'>
          <div style={{ backgroundImage : `url(${slika})` }}> </div>
          <h1>{naziv}</h1>
          <p>{cena} din.</p>
      <button className='dodajKorpa' onClick={() => dodajUKolica(id)}>Dodaj u korpu {kolicaBrojProizvoda > 0 && <>({kolicaBrojProizvoda})</>}</button>
    </div>
  )
}

export default ProizvodiItem

