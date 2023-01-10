import React from 'react'
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import useToggle from '../components/useToggle';
import oNamaImage from '../images/oNama2.jpg';
import '../styles/ONama.css';

function ONama() {


  const [toggleTab, setToggleTab] = useToggle(1);

    return (
      <Fragment>
        <section>
          <div className='oNama'>

            <div className='oNamaLeftColumn'
              style={{ backgroundImage: `url(${oNamaImage})` }}>      
            </div>

            <div className='oNamaRightColumn'>
              
              {/* kartice sa nazivima tabova */}
              <div className='tabs'>
                <div className={toggleTab === 1 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(1)}>
                  <h3>O nama</h3>
                </div>

                <div className={toggleTab === 2 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(2)}>
                  <h3>Naš angažman</h3>
                </div>

                <div className={toggleTab === 3 ? 'singleTab activeTab' : 'singleTab'} onClick={() => setToggleTab(3)}>
                  <h3>Gde nas možete naći</h3>
                </div>     
              </div>

              {/* body svakog taba */}
              <div className='tabContent'>

                {/* sadrzaj O nama */}
                <div className={toggleTab === 1 ? 'content activeContent' : 'content'}>
                  <h3>Čime se bavimo?</h3>
                  <p>
                    Milsan je kompanija osnovana 2004.godine sa ciljem da na jednom mestu okupi tim stručnjaka koji Vam mogu pomoći da svoje dvorište
                    opremite po meri. U našoj ponudi možete naći baštenski nameštaj, rasvetu i dekorativne predmete. <br/>Sarađujemo sa preko 15 domaćih 
                    i više od 20 svetskih proizvođača, a u planu je razvoj i našeg, sopstvenog brenda.
                  </p>
                  <p>
                    U poslednje dve godine započeli smo proces širenja našeg interesovanja. Program smo proširili uvođenjem novih kategorija, a otišli smo
                    i korak dalje: organizujemo brojne manifestacije koje Vam pomažu da se upoznate sa svetom baštovanstva. Taj rad nam je 2021. godine
                    doneo prestižnu titulu <br/> Zlatne kompanije!
                  </p>
                </div>

                {/* sadrzaj Naš angažman */}
                <div className={toggleTab === 2 ? 'content activeContent' : 'content'}>
                  <h3>Sajmovi</h3>
                  <p>
                    Svake godine organizujemo sajmove širom Srbije - ove godine je na redu Gornji Milanovac! Na našim sajmovima se možete upoznati sa
                    proizvođačima i sa njihovim ponudama, a možete obezbediti i omiljene proizvode po promotivnim cenama. Svaki sajam završavamo predavanjima
                    stručnjaka iz oblasti baštovanstva i dizajna eksterijera. U razgovoru sa njima možete da saznate koji su vodeći trendovi u uređenju dvorišta
                    i kako ih možete prilgaoditi sopstvenom ukusu.
                  </p>

                  <h3>Bašte</h3>
                  <p>
                    Najlepše je videti kako naši proizvodi upotpunjavaju vaše vaše bašte! Svake godine otvaramo konkurs gde se možete prijaviti i 
                    pokazati nam kako se Milsan proizvodi uklapaju u Vašu viziju. Pratite obaveštenja kako ne biste propustili šansu da osvojiti vredne nagrade!
                  </p>
                </div>

                {/* sadrzaj  */}
                <div className={toggleTab === 3 ? 'content activeContent' : 'content'}>
                  <h3>Gde nas možete pronaći?</h3>
                  <p>
                    Ušetajte u jedan od 5 Milsan prodajnih salona u Kragujevcu, Nišu, Somboru, Valjevu Zrenjaninu! <br/> Tu smo za Vas svakog radnog dana 
                    od 8 do 20 časova. <br/>Na raspologanju Vam stoji ljubazno osoblje spremno da Vas uputi i olakša Vašu kupovinu.
                  </p>
                  <p>
                    Imate pitanje za nas? Pozovite nas na 060-11-112-21 
                    <Link to='/kontakt' style={{ textDecoration: 'none' }}>
                      <button>Ili nam pišite!</button>
                    </Link>
                  </p>
                </div>

              </div>

            </div>
          
            </div>
          </section>
        </Fragment>
  )
}

export default ONama