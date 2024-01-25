'use client'
import CheckAuthentication from "@/components/CheckAuthentication";
import Link from "next/link";
import { useMemo, useState } from "react";
import axios from "@/lib/axios"
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { IPropertyUnit } from "@/Interfaces/IPropertyUnit";
import CreatePropertyUnits from "@/components/PropertyUnits/CreatePropertyUnits";



export default function Page() {
    

    const [page, setPage] = useState(1)
    const [isShowModal, setIsShowModal] = useState(false)
    const { isSuccess, isPending, isError, data, error, isPlaceholderData } = useQuery({
        queryKey: ['property-units', { page }],
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const response = await axios.get(`/api/property-units`)
            return response.data as Array<IPropertyUnit>
        },
    })
   

  

    if (isPending) {
        return <span>Loading... in React query</span>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }


    return (
        <CheckAuthentication pageTitle='property units'>

            
            <div className="btn _solid" onClick={()=>{setIsShowModal(true)}}>Add new property </div>
            {isShowModal == true && <CreatePropertyUnits/> }

            {isSuccess ? data.map(({ ...item }: IPropertyUnit, index: number) => {
                return (
                    <div key={index}>{item.name}</div>
                )
            }) : ''}

        </CheckAuthentication>
    )
}