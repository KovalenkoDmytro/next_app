'use client'
import axios from "@/lib/axios"
import { useQuery } from '@tanstack/react-query'
import { IEstateProperty } from '@/Interfaces/IEstateProperty'
import PreviewPage from "@/components/PreviewPage"
import { useEffect, useState } from "react"


export default function Page({ params }: { params: { id: number } }) {
    const [estateProperty, setEstateProperty] = useState<IEstateProperty>({
        name: '',
        propertyDescription: '',
        address: '',
        locationDescription: '',
    })

    const getEstateProperties = async()=>{
        const response = await axios.get(`/api/estate-properties/${params.id}/edit`)
        return response.data as IEstateProperty
    }

    useEffect(()=>{
        getEstateProperties().then(data => setEstateProperty(data))
    },[])


    // const { isSuccess, isPending, isError, data, error } = useQuery({
    //     queryKey: [`estate-property`],
    //     queryFn: async () => {
    //         const response = await axios.get(`/api/estate-properties/${params.id}/edit`)
    //         return response.data as IEstateProperty
    //     },
    // })
    // if (isPending) {
    //     return <span>Loading... in React query</span>
    // }

    // if (isError) {
    //     return <div>Error: {error.message}</div>
    // }
    // if (isSuccess) {
    //     setEstateProperty(data)
    // }

    return (
        <article>
            <PreviewPage />
                <div>
                    Real Este
                    id - {estateProperty.id}
                    name - {estateProperty.name}
                    address - {estateProperty.address}
                    propertyDescription - {estateProperty.propertyDescription}
                    locationDescription - {estateProperty.locationDescription}
                </div>
        </article>
    )
} 