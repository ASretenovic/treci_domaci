import React, { useContext, useState } from 'react';
import { ProizvodiList } from '../handler/ProizvodiList';
import { ProizvodiContext } from '../context/ProizvodiContext';
import { KolicaItem } from '../components/KolicaItem';
import '../styles/Kolica.css';
import { useNavigate } from 'react-router-dom';
import Paginacija from '../components/Paginacija';

export const Kolica = () => {

    const { kolicaItems, ukupnoZaPlacanje } = useContext(ProizvodiContext);
    const ukupno = ukupnoZaPlacanje();
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();

    const proizvodiKolica = [];
    for (const proizvod of ProizvodiList) {
        if (kolicaItems[proizvod.id] !== 0) {
            proizvodiKolica.push(proizvod);
            console.log(proizvod.id);
        }
    }

    const BROJ_PROIZVODA_PO_STRANI = 3;
    const pages = Math.ceil(proizvodiKolica.length / BROJ_PROIZVODA_PO_STRANI);
    const firstIndex = (currentPage - 1) * BROJ_PROIZVODA_PO_STRANI;
    const lastIndex = currentPage * BROJ_PROIZVODA_PO_STRANI;
    const prikazaniProizvodi = proizvodiKolica.slice(firstIndex, lastIndex);


    return (
        <>
        <div className='kolica'>
            <div>
                <h2>Vaša Kupovina</h2>
            </div>

            <div className='kolicaItems'>
                {prikazaniProizvodi.map((proizvod) => {
                    if (kolicaItems[proizvod.id] !== 0) {
                        return <KolicaItem data={proizvod} />
                    }
                })}
            </div>
            {ukupno > 0 ?
            <div className='kolicaCheckout'>
                <p>Ukupno: {ukupno} .din</p>
                <button onClick={() => navigate('/proizvodi')}>Nastavi sa kupovinom</button>
                <button>Plaćanje</button>
            </div>
            :
            <div className='praznaKolica'>
                <h2> Vaša kolica su prazna.</h2>
                <button onClick={() => navigate('/proizvodi')}>Započni kupovinu</button>
            </div>}
        </div>
        <Paginacija pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}  />
        </>
  )
}
