import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import Proizvodi from './pages/Proizvodi';

// 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Pocetna />} />
          <Route path='/proizvodi' exact element={<Proizvodi />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
