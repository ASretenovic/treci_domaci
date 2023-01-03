import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import Proizvodi from './pages/Proizvodi';
import ONama from './pages/ONama';
import Kontakt from './pages/Kontakt';
import { ProizvodiContextProvider } from './context/ProizvodiContext';
import { Kolica } from './pages/Kolica';
//import { Kolica } from './pages/Kolica';

// 

function App() {
  return (
    <div className="App">
      <ProizvodiContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Pocetna />} />
          <Route path='/proizvodi' exact element={<Proizvodi />} />
          <Route path='/kontakt' exact element={<Kontakt />} />
            <Route path='/oNama' exact element={<ONama />} />
            <Route path='/kolica' exact element={<Kolica />}/>
        </Routes>
        <Footer />
        </Router>
        </ProizvodiContextProvider>
    </div>
  );
}

export default App;
