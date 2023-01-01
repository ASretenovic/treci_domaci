import React, {useState} from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const [activeLinks, setLinksActive] = useState(false);

    // funkcija menja status promenljive activeLinks svaki put kada se klikne na dugme
    const manageNavbar = () => {
        setLinksActive(!activeLinks);
    };

  return (
    <div className='navbar'>
          <div className='left-column' id={activeLinks ? 'open' : 'close'}>
              <img src={logo} />
              <div className='hiddenLinks'>
                {/* linkovi koji ce se prikazivati samo kad se smanji rezolucija */}
                <Link to='/'>Početna</Link>
                <Link to='/proizvodi'>Proizvodi</Link>
                <Link to='/kontakt'>Kontakt</Link>
                <Link to='/oNama'>O nama</Link>
              </div>
            </div>

            <div className='right-column'>
              <Link to='/'>Početna</Link>
              <Link to='/proizvodi'>Proizvodi</Link>
              <Link to='/kontakt'>Kontakt</Link>
              <Link to='/oNama'>O nama</Link>
              <button onClick={manageNavbar}>
                  <ReorderIcon />
              </button>
            </div>
    </div>
  )
}

export default Navbar