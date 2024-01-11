'use client'

import {useAuth} from '@/Helpers/Auth'
import Link from 'next/link'
import {useState } from 'react'

type User = {
    email: string,
    password: string,
}

const Login = ( props : {params :{locate: string}}) => {
    
    const language = props.params.locate

    const [user, setUser] = useState<User>({
        email: '',
        password: '',
    })
    
    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    return (
        <>
          Login page
            <input type="email" onChange={(event)=>{setUser({...user, email : event.target.value})}} />
            <input type="password" onChange={(event)=>{setUser({...user, password : event.target.value})}} />
            <button onClick={()=>{login(user)}}> Send </button>

            Do not have an account, yet ?
            <Link href={`/${language}/register`}>Creat an accaunt</Link>
        </>
    )
}

export default Login


