'use client'
import { useAuth } from '@/Helpers/Auth';
import { useParams } from 'next/navigation';



export default function LogOut(){
    const {locate} = useParams()
    const { logout } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: `/${locate}/login`,
    })

    return(
        <button onClick={logout}>logout</button>
    )
}