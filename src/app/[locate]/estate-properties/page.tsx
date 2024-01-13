'use client'
import axios from "@/lib/axios"
import { useState } from "react"
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import PreviewPage from "@/components/PreviewPage"
import Link from "next/link"

export default function Page(){

    const [page, setPage] = useState(1)
    const { isSuccess, isPending, isError, data, error, isPlaceholderData  } = useQuery({
        queryKey: ['estate-properies', { page }],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get(`/estate-properties`)
            return response.data 
            // as Array<ITodo>
        },
    })

    return(
        <article>
            estateProperies Page

            <PreviewPage/>
            <Link href={'estate-properties/create'}>create estatePropery unit</Link>
        </article>    
    )
} 