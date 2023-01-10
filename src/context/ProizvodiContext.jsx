import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { ProizvodiList } from '../handler/ProizvodiList';

export const ProizvodiContext = createContext(null);

// pocetno stanje proizvoda (pre dodavanja u kolica)
const getDefaultKolica = () => {
    let kolica = {}
    for (let i = 1; i < ProizvodiList.length + 1; i++) {
        kolica[i] = 0;
    }
    return kolica;
};


export const ProizvodiContextProvider = (props) => {
    const [kolicaItems, setKolicaItems] = useState(getDefaultKolica());

    const dodajUKolica = (proizvodId) => {
        setKolicaItems((prev) => ({ ...prev, [proizvodId]: prev[proizvodId] + 1 }))           // izracunaj broj proizvoda u kolicima ciji je id = proizvodId; svaki put kad se izvrsi dodavanje broj = prethodniBroj + 1
    };

    const izbrisiIzKolica = (proizvodId) => {
        setKolicaItems((prev) => ({ ...prev, [proizvodId]: prev[proizvodId] - 1 }))
    };


    const ukupnoZaPlacanje = () => {
        let ukupno = 0;
        for (const item in kolicaItems) {
            if (kolicaItems[item] > 0) {
                let cenaProizvoda = ProizvodiList.find((proizvod) => proizvod.id === Number(item));    // vraca ceo proizvod ciji je id = item
                ukupno = ukupno + kolicaItems[item] * cenaProizvoda.cena;           // kolicina proizvoda * cena
            }
        }
        return ukupno;
    };

    const contexValue = { kolicaItems, dodajUKolica, izbrisiIzKolica,  ukupnoZaPlacanje};

    //console.log(kolicaItems);

    return <ProizvodiContext.Provider value={contexValue}>{props.children}</ProizvodiContext.Provider>
}
