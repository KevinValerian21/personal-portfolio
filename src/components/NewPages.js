import { useState, useEffect } from 'react';
import { Switch} from 'react-router-dom';



// import NavDropdown from 'react-bootstrap/NavDropdown';

// import {Navbar, Container} from "react-bootstrap";

export const NewPages = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <p>HELLO WORLD!</p>
    )
}