import { Collection } from 'react-bootstrap-icons';
import {useNavigate} from 'react-router-dom'

const Test = () => {
    const navigate = useNavigate()

    return(
        <>
            <h1>HELLO WORLD !</h1>
            <button onClick={() => navigate('/')} >BACK</button>

        </>
    )
}

export default Test;