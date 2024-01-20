'use client'
import axios from "@/lib/axios"
import { useState } from "react"
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import PreviewPage from "@/components/PreviewPage"
import Link from "next/link"
import { IEstateProperty } from "@/Interfaces/IEstateProperty"
import EstateProperty from "@/components/EstatePropertyItem"
import CheckAuthentication from "@/components/CheckAuthentication"


type EstatePropertyProps = {
    id: number,
    name: string,
    address: string
}

export default function Page() {

    const [page, setPage] = useState(1)
    const { isSuccess, isPending, isError, data, error, isPlaceholderData } = useQuery({
        queryKey: ['estate-properies', { page }],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get(`/api/estate-properties`)
            return response.data as Array<EstatePropertyProps>
        },
    })

  

    if (isPending) {
        return <span>Loading... in React query</span>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <CheckAuthentication pageTitle='Estate properies'>
            estateProperies Page

            <PreviewPage />

            {isSuccess ? data.map(({ ...item }: EstatePropertyProps, index: number) => {
                return <EstateProperty {...item} key={index} />
            }) : ''}

            <Link href={'estate-properties/create'}>create estatePropery unit</Link>
        </CheckAuthentication>
    )
} 