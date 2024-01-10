"use client"
import axios from 'axios'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useState } from 'react'
import {  ITodo } from '@/Interfaces/ITodo'
import Todo from '@/components/Todo'


export default function Todos() {

    const [page, setPage] = useState(1)
    const { isSuccess, isPending, isError, data, error, isPlaceholderData  } = useQuery({
        queryKey: ['todos', { page }],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}`)
            return response.data as Array<ITodo>
        },
    })
    
// Simple GET request using fetch
    fetch('http://127.0.0.1:8001/api/testAPI')
        .then(response => response.json())
        .then(data => console.log(data) );


    if (isPending) {
        return <span>Loading... in React query</span>
    }
    return (

        <div>
            <h1>Todos component</h1>
            
            <span>Current Page: {page}</span>
            
            <button onClick={() => setPage(page - 1)} disabled={page === 0} >
                Previous Page
            </button>{' '}
            
            <button disabled={isPlaceholderData || data?.length === 0 } onClick={() => {
                if (!isPlaceholderData) { setPage(page + 1) }
            }}>
                Next Page
            </button >

            {isError ? <div>Error: {error.message}</div> : data.map(({ ...item }: ITodo, index: number) => {
                return <Todo {...item} key={index} />
            })}
        </div>
    )
}