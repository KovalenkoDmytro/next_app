'use client'

import { IEstateProperty } from "@/Interfaces/IEstateProperty"
import axios from "@/lib/axios"
import toShowNotification from "@/lib/notification"
import PreviewPage from "@/components/PreviewPage"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import CheckAuthentication from "@/components/CheckAuthentication"


export default function Page() {
    const [estateProperty, setEstateProperty] = useState<IEstateProperty>({
        name: '',
        propertyDescription: '',
        address: '',
        locationDescription: '',
    })
    const toCreate = async (data: IEstateProperty) => {
        const resp =  await axios.post('/api/estate-properties', data)
        return resp.data
    };

    const client = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: toCreate,
        onSuccess: (data) => {
            client.invalidateQueries({ queryKey: ['estate-properies'] })
            toShowNotification(data)
        },
        onError(error, variables, context) {
            toShowNotification(
                {   type: 'error',
                    message : error['response'].data.errors}
            )
        },
    })
    


    return (
        <CheckAuthentication pageTitle='Create estate property'>
            <h1>Create estatePropery unit</h1>
            <PreviewPage />
            <input type="text" onChange={(event) => { setEstateProperty({ ...estateProperty, name: event.target.value }) }} />
            <input type="text" onChange={(event) => { setEstateProperty({ ...estateProperty, propertyDescription: event.target.value }) }} />
            <input type="text" onChange={(event) => { setEstateProperty({ ...estateProperty, address: event.target.value }) }} />
            <input type="text" onChange={(event) => { setEstateProperty({ ...estateProperty, locationDescription: event.target.value }) }} />


            <button onClick={() => { mutate(estateProperty) }}> Send </button>
        </CheckAuthentication>
    )
}