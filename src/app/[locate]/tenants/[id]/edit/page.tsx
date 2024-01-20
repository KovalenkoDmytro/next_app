'use client'

import { ITenant } from "@/Interfaces/ITenant";
import PreviewPage from "@/components/PreviewPage"
import axios from "@/lib/axios";
import { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import toShowNotification from "@/lib/notification";
import { useParams } from 'next/navigation'
export default function Page() {

    const { id } = useParams<{ id: string }>()
    const client = useQueryClient()
    const queryClient = useQueryClient()
    const { isSuccess, isPending, data, error, isPlaceholderData } = useQuery({
        queryKey: ['tenant', { id }],
        queryFn: async () => {
            const response = await axios.get(`/api/tenants/${id}/edit`)
            return response.data as ITenant
        },
    })
    const toUpdateQueryData = function (data: {}) {
        queryClient.setQueryData(['tenant', { id }], (oldData) => oldData ? { ...oldData, ...data } : oldData)
    }

    const toUptade = async () => {
        const resp =  await axios.put(`/api/tenants/${id}`, data)
        return resp.data
    };

    const { mutate } = useMutation({
        mutationFn: toUptade,
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
            <input type="text" value={data?.firstName} onChange={(event) => { toUpdateQueryData({ firstName: event.target.value }) }} />
            <input type="text" value={data?.lastName} onChange={(event) => {toUpdateQueryData({ lastName: event.target.value }) }} />
            <input type="tel" value={data?.phone} onChange={(event) => {toUpdateQueryData({ phone: event.target.value }) }} />
            <input type="email" value={data?.email}   onChange={(event) => {toUpdateQueryData({ email: event.target.value }) }} />
            <button onClick={() => { mutate() }}> Update </button>
        </article>
    )
}