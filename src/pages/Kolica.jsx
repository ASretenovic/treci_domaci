import React, { useContext } from 'react';
import { ProizvodiList } from '../handler/ProizvodiList';
import { ProizvodiContext } from '../context/ProizvodiContext';
import { KolicaItem } from '../components/KolicaItem';
import '../styles/Kolica.css';

export const Kolica = () => {

    const { kolicaItems } = useContext(ProizvodiContext);

  return (
      <div className='kolica'>
          <div>
              <h2>Vaša Kupovina</h2>
          </div>

          <div className='kolicaItems'>
              {ProizvodiList.map((proizvod) => {
                  if (kolicaItems[proizvod.id] !== 0) {
                      return <KolicaItem data={proizvod} />
                  }
              })}
          </div>
    </div>
  )
}
