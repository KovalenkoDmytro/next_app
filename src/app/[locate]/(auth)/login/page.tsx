'use client'



import {useAuth} from '@/Hooks/Auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const Login = () => {
    const router = useRouter()

    const { login } = useAuth()
    console.log(login)


    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)


    return (
        <>
            Login page
        </>
    )
}

export default Login