// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Footer } from './components/Footer';
// import { Contact } from "./components/Contact";
// import { NewPages } from "./components/NewPages";

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Pages1_Home from './components/Pages1_Home';
import Pages2_Portfolio from './components/Pages2_Portfolio';
import Pages3_Dokumentasi from './components/Pages3_Dokumentasi';
import Pages4_Praktek from './components/Pages4_Praktek';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Pages1_Home/>} />
          <Route path='/Pages2_Portfolio' element={<Pages2_Portfolio/>} />
          <Route path='/Pages3_Dokumentasi' element={<Pages3_Dokumentasi/>} />
          <Route path='/Pages4_Praktek' element={<Pages4_Praktek/>} />
      </Routes>
    </Router>
  );
}

export default App;