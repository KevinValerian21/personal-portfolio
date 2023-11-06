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
import Home from './Pages/Home';
// import Skills from './Pages/Skills';
import Dokumentasi from './Pages/Dokumentasi';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/Skills' element={<Skills/>} /> */}
          <Route path='/Dokumentasi' element={<Dokumentasi/>} />
      </Routes>
    </Router>
  );
}

export default App;