import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Home() {
    const navigate = useNavigate()
    const state = useSelector(state => state.users)

    const handleClick = ()=> {
        navigate("/")
    }
    return ( 
        <>
            <h1>Soy el home</h1>
            <h2>State: {JSON.stringify(state)}</h2>
            <button onClick={handleClick}>Cerrar sesión</button>
        </>
     );
}

export default Home;