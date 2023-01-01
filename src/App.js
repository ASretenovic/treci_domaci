import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pocetna from './pages/Pocetna';

// 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Pocetna />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
