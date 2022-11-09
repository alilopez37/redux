import {useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import UserContext from '../context/UserContext';

function Login() {
    const {setIsLogued} = useContext(UserContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state.values)

    const dispatchAction = ()=> {
        dispatch({
            type: "ACTION_01",
            value: {
                id: 1,
                name: "ali"
            }
        })
    }

    const handleClick = ()=> {
        setIsLogued(true);
        navigate("/home")
    }
    const handleClickLogout = ()=> {
        setIsLogued(false);
        navigate("/login")
    }

    return (
        <>
            <div>Valor: {JSON.stringify(state)}</div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" />
            <div>
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>

            <div>
                <button type="button" onClick={handleClick}>Iniciar sesión</button>
            </div>
            <div>
                <button type="button" onClick={handleClickLogout}>Cerrar sesión</button>
            </div>
            <div>
                <button type="button" onClick={dispatchAction}>Store</button>
            </div>
            <div>
                <Link to="/prueba">Otra página</Link>
                <Link to="/home">Home</Link>
            </div>
        </div>
        </>
      );
}

export default Login;