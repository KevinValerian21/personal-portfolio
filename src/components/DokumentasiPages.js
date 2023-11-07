import { Collection } from 'react-bootstrap-icons';
import {useNavigate} from 'react-router-dom'
import { NavBar3_DokumentasiPages } from "./NavBar3_DokumentasiPages";
import { Banners } from "./Banners";

const DokumentasiPages = () => {
    const navigate = useNavigate()

    return(
        <>
            <NavBar3_DokumentasiPages />
            <Banners />

        </>
    )
}

export default DokumentasiPages;
