'use client'
import { useAuth } from '@/Hooks/Auth';



export default function LogOut(){
   
    const { logout } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    return(
        <button onClick={logout}>logout</button>
    )
}