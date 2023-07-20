import React, { useContext, useState } from 'react'
import "./login.css"
import { AuthContext } from '../Context/authContext/authContext'
import { login } from '../Context/authContext/apiCall'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isFetching, dispatch } = useContext(AuthContext)
    const handelLogin = (e) => {
        e.preventDefault()
        login({ email, password }, dispatch)
    }

    return (


        <div className='loginAdmin'>
            <form className='loginForm'>
                <input type='text' placeholder='email' className='loginInput' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password' className='loginInput' onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" onClick={handelLogin} disabled={isFetching} >Login</button>

            </form>

        </div >
    )
}

export default Login