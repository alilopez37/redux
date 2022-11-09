import { useContext, useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserContext from '../context/UserContext';

function Home() {
    const navigate = useNavigate()
    const {isLogued} = useContext(UserContext)
    const state = useSelector(state => state.values)

    useEffect(()=> {
        if (!isLogued)
            navigate("/login")    
    },[])
    console.log(isLogued)

    return (
        <>
            <div>Valor: {JSON.stringify(state)}</div>
            {isLogued && 
            <>
                <h1> Hola, soy el home!!!</h1> 
                <Link to="/login">Login</Link>
            </>}
        </>
    )
}

export default Home;