import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleClick = ()=> {
        //Se supune que acá hacemos fetch o axios para validar usuario
        // Proporcionar un actions
        dispatch({
            type: "ACTION_01",
            value : {
                id: 1,
                username : "ali"
            }
        }) 
        navigate("/home");
    }

    return ( 
        <>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>
            <div>
                <button onClick={handleClick}>Iniciar sesión</button>
            </div>
        </>
     );
}

export default Login;