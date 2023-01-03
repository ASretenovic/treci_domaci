import React, { useContext } from 'react';
import { ProizvodiContext } from '../context/ProizvodiContext';

function ProizvodiItem({ id, slika, naziv, cena }) {
  const { dodajUKolica, kolicaItems } = useContext(ProizvodiContext);

  //console.log(brojProizvoda);
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

//{kolicaBrojProizvoda > 0 && <>({kolicaBrojProizvoda})</>}

/*
function ProizvodiItem({ id, slika, naziv, cena }) {
  const { dodajUKolica, brojProizvoda } = useContext(ProizvodiContext);


  const kolicaBrojProizvoda = brojProizvoda[id];

  return (
      <div className='proizvodiItem'>
          <div style={{ backgroundImage : `url(${slika})` }}> </div>
          <h1>{naziv}</h1>
          <p>{cena} din.</p>
      <button className='dodajKorpa' onClick={() => dodajUKolica(id)}>Dodaj u korpu</button>
    </div>
  )
}
*/