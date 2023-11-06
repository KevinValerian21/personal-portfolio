import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/Frame.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useNavigate } from 'react-router-dom';

export const NavBars_Dokumentasi = () => {
  const [activeLink, setActiveLink] = useState('Dokumentasi');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    navigate(value === 'Dokumentasi' ? '../Dokumentasi' : `../#${value}`);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('Skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === 'Dokumentasi' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Dokumentasi')}
            >
              Dokumentasi
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kevinvalerianninia">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/KevinValerian21/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/kevinvarn21">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};