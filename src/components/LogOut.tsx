'use client'
import { useAuth } from '@/Helpers/Auth';



export default function LogOut(props? : {params? :{locate: string}}){
    const language = props?.params?.locate
    const { logout } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: `/${language}/login`,
    })

    return(
        <button onClick={logout}>logout</button>
    )
}