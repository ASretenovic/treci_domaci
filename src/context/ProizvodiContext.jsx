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

    const contexValue = { kolicaItems, dodajUKolica, izbrisiIzKolica };


    console.log(kolicaItems);

    return <ProizvodiContext.Provider value={contexValue}>{props.children}</ProizvodiContext.Provider>
}
