'use client'
import axios from "@/lib/axios"
import { useState } from "react"
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import PreviewPage from "@/components/PreviewPage"
import Link from "next/link"
import { IEstateProperty } from "@/Interfaces/IEstateProperty"
import EstateProperty from "@/components/EstatePropertyItem"

export default function Page(){

    const [page, setPage] = useState(1)
    const { isSuccess, isPending, isError, data, error, isPlaceholderData  } = useQuery({
        queryKey: ['estate-properies', { page }],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get(`/api/estate-properties`)
            return response.data 
            // as Array<ITodo>
        },
    })

    if (isPending) {
        return <span>Loading... in React query</span>
    }
    type EstatePropertyProps = {
        id: number,
        name: string,
        address: string
    }

    return(
        <article>
            estateProperies Page
            
            <PreviewPage/>
            {isError ? <div>Error: {error.message}</div> : data.map(({ ...item }: EstatePropertyProps, index: number) => {
                return <EstateProperty {...item} key={index} />
            })}
        
            <Link href={'estate-properties/create'}>create estatePropery unit</Link>
        </article>    
    )
} 