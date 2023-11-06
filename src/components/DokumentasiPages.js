import { Collection } from 'react-bootstrap-icons';
import {useNavigate} from 'react-router-dom'
import { NavBars_Dokumentasi } from "./NavBars_Dokumentasi";
import { Banners } from "./Banners";

const DokumentasiPages = () => {
    const navigate = useNavigate()

    return(
        <>
            <NavBars_Dokumentasi />
            <Banners />
            {/* <Banners /> */}

        </>
    )
}

export default DokumentasiPages;
