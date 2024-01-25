"use client"
import axios from 'axios'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useState } from 'react'
import { IPropertyUnit } from '@/Interfaces/IPropertyUnit'
import Todo from '@/components/Todo'


export default function PropertyUnits() {

    const { isSuccess, isPending, isError, data, error, isPlaceholderData  } = useQuery({
        queryKey: ['PropertyUnits'],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get("api/property-units")
            return response.data as Array<IPropertyUnit>
        },
    })
    

    if (isPending) {
        return <span>Loading... in React query</span>
    }
    return (

        <div>
            <h1>PropertyUnits component</h1>
            
            {/* {isError ? <div>Error: {error.message}</div> : data.map(({ ...item }: IPropertyUnits, index: number) => {
                return <Todo {...item} key={index} />
            })} */}
        </div>
    )
}