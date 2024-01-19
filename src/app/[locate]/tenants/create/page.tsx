'use client'

import { IEstateProperty } from "@/Interfaces/IEstateProperty"
import axios from "@/lib/axios"
import toShowNotification from "@/lib/notification"
import PreviewPage from "@/components/PreviewPage"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ITenant } from "@/Interfaces/ITenant"


export default function Page() {
    const [tenant, seTtenant] = useState<ITenant>({
        firstName: '',
        lastName: '',
        phone: '',
    })
    const toCreate = async (data: ITenant) => {
        const resp =  await axios.post('/api/tenants', data)
        return resp.data
    };

    const client = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: toCreate,
        onSuccess: (data) => {
            client.invalidateQueries({ queryKey: ['tenants'] })
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
        <article>
            <h1>Create tenant</h1>
            <PreviewPage />
            <input type="text" onChange={(event) => { seTtenant({ ...tenant, firstName: event.target.value }) }} />
            <input type="text" onChange={(event) => { seTtenant({ ...tenant, lastName: event.target.value }) }} />
            <input type="tel" onChange={(event) => { seTtenant({ ...tenant, phone: event.target.value }) }} />
            <input type="email" onChange={(event) => { seTtenant({ ...tenant, email: event.target.value }) }} />
            <button onClick={() => { mutate(tenant) }}> Send </button>
        </article>
    )
}