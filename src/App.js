import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import Proizvodi from './pages/Proizvodi';
import ONama from './pages/ONama';
import Kontakt from './pages/Kontakt';

// 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Pocetna />} />
          <Route path='/proizvodi' exact element={<Proizvodi />} />
          <Route path='/kontakt' exact element={<Kontakt />} />
          <Route path='/oNama' exact element={<ONama />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
