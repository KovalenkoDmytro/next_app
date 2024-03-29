'use client'
import axios from "@/lib/axios"
import { useState } from "react"
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import PreviewPage from "@/components/PreviewPage"
import Link from "next/link"
import { ITenant } from "@/Interfaces/ITenant"
import Tenant from "@/components/Tenant"
import CheckAuthentication from "@/components/CheckAuthentication"



export default function Page() {
    const [page, setPage] = useState(1)
    const { isSuccess, isPending, isError, data, error, isPlaceholderData } = useQuery({
        queryKey: ['tenants', { page }],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get(`/api/tenants`)
            return response.data as Array<ITenant>
        },
    })
    
    if (isPending) {
        return <span>Loading... in React query</span>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }


    return(
        <CheckAuthentication pageTitle='Tenant'>
            tenants Page

            <PreviewPage />

            {isSuccess ? data.map(({ ...item }: ITenant, index: number) => {
                return <Tenant {...item} key={index} />
            }) : ''}

            <Link href={'tenants/create'}>create tenant</Link>
        </CheckAuthentication>
    )
}