'use client'
import { useAuth } from '@/Helpers/Auth';



export default function LogOut(){
   
    const { logout } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/en/login',
    })

    return(
        <button onClick={logout}>logout</button>
    )
}