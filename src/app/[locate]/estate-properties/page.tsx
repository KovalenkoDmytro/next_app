'use client'
import axios from "@/lib/axios"
import { useState } from "react"
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export default function Page(){

    const [page, setPage] = useState(1)
    const { isSuccess, isPending, isError, data, error, isPlaceholderData  } = useQuery({
        queryKey: ['estate-properies', { page }],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get(`/estate-properies`)
            return response.data 
            // as Array<ITodo>
        },
    })

    return(
        <article>
            estateProperies Page
        </article>    
    )
} 