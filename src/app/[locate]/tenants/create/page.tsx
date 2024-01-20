'use client'

import { IEstateProperty } from "@/Interfaces/IEstateProperty"
import axios from "@/lib/axios"
import toShowNotification from "@/lib/notification"
import PreviewPage from "@/components/PreviewPage"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ITenant } from "@/Interfaces/ITenant"
import { useRouter } from "next/navigation"


export default function Page() {
    const client = useQueryClient()
    const router = useRouter()
    const queryClient = useQueryClient()
    const [tenant, setTenant] = useState<ITenant>({
        firstName: '',
        lastName: '',
        phone: '',
        email : ''
    })
    const toCreate = async (data: ITenant) => {
        const resp =  await axios.post('/api/tenants', data)
        return resp.data
    };
 

    const { mutate } = useMutation({
        mutationFn: toCreate,
        onSuccess: (data) => {
            client.invalidateQueries({ queryKey: ['tenants'] })
            toShowNotification(data)
            router.back()
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
            <input type="text" onChange={(event) => { setTenant({ ...tenant, firstName: event.target.value }) }} />
            <input type="text" onChange={(event) => { setTenant({ ...tenant, lastName: event.target.value }) }} />
            <input type="tel" onChange={(event) => { setTenant({ ...tenant, phone: event.target.value }) }} />
            <input type="email" onChange={(event) => { setTenant({ ...tenant, email: event.target.value }) }} />
            <button onClick={() => { mutate(tenant) }}> Send </button>
        </article>
    )
}