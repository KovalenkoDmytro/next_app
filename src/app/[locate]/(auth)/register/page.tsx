'use client'

import {IUser} from '@/Interfaces/Auth/Register/IUser'
import {Authentication} from '@/Helpers/Auth'
import { useState } from "react"

export default function Page(){

    const [user, setUser] = useState<IUser>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })
    // const { register } = useAuth({
    //     middleware: 'guest',
    //     redirectIfAuthenticated: '/',
    // })

    return(
        <article>
            Registration page

            <input type="text" onChange={(event)=>{setUser({...user, name : event.target.value})}} />
            <input type="email" onChange={(event)=>{setUser({...user, email : event.target.value})}} />
            <input type="password" onChange={(event)=>{setUser({...user, password : event.target.value})}} />
            <input type="password" onChange={(event)=>{setUser({...user, password_confirmation : event.target.value})}} />

            {/* <button onClick={()=>{register(user)}}> Send </button> */}
            
        </article>
    )
}