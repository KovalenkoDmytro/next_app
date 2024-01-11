'use client'

import {useAuth} from '@/Helpers/Auth'
import {useState } from 'react'

type User = {
    email: string,
    password: string,
}

const Login = () => {
    const [user, setUser] = useState<User>({
        email: '',
        password: '',
    })

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })
    // const { login } = Authentication()

    return (
        <>
          Login page
            <input type="email" onChange={(event)=>{setUser({...user, email : event.target.value})}} />
            <input type="password" onChange={(event)=>{setUser({...user, password : event.target.value})}} />
          
            <button onClick={()=>{login(user)}}> Send </button>
        </>
    )
}

export default Login


