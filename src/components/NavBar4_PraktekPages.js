import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/Frame.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useNavigate } from 'react-router-dom';
import download from 'downloadjs';


export const NavBar4_PraktekPages = () => {
  const [activeLink, setActiveLink] = useState('home');
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
    navigate(value === '/Pages1_Home' ? '/Pages1_Home' : ``);
  };

  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual path to your PDF file.
    const pdfFilePath = '../assets/resume/CV_Kevin.pdf';
  
    // Use the downloadjs library to initiate the download.
    download(pdfFilePath, 'CV_Kevin.pdf', 'application/pdf');
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
            className={activeLink === 'Pages1_Home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => navigate('/')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={activeLink === 'Pages2_Portfolio' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => navigate('/Pages2_Portfolio')}
          >
            Portfolio
          </Nav.Link>

            <Nav.Link
              className={
                activeLink === 'Pages3_Dokumentasi' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => navigate('/Pages3_Dokumentasi')}
            >
              Dokumentasi
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === 'Pages4_Fetching' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => navigate('/Pages4_Praktek')}
            >
              Praktek
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
            <button className="vvd" onClick={() => handleDownloadResume()}>
              <span>Download Resume</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
