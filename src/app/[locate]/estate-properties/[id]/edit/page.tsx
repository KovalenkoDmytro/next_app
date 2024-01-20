
'use client'
import React from "react";
import axios from "@/lib/axios"
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { IEstateProperty } from '@/Interfaces/IEstateProperty'
import PreviewPage from "@/components/PreviewPage"
import Tabs from "@/components/Tabs/Tabs"
import TabContentItem from "@/components/Tabs/TabContentItem"
import Loading from "@/components/Loading";
import { useParams } from "next/navigation";
import toShowNotification from "@/lib/notification";


export default function Page() {
    const { id } = useParams<{ id: string }>()
    const queryClient = useQueryClient()

    const { isSuccess, isPending, isError, data, error, isPlaceholderData } = useQuery({
        queryKey: ['estate-properties', { id }],
        queryFn: async () => {
            const response = await axios.get(`/api/estate-properties/${id}/edit`)
            return response.data as IEstateProperty
        },
    })

    const toUpdateQueryData = function (data: {}) {
        queryClient.setQueryData(['estate-properties', { id }], (oldData) => oldData ? { ...oldData, ...data } : oldData)
    }

    const toUptade = async () => {
        const resp = await axios.put(`/api/estate-properties/${id}`, data)
        return resp.data
    };

    const { mutate } = useMutation({
        mutationFn: toUptade,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['tenants'] })
            toShowNotification(data)
        },
        onError(error, variables, context) {
            toShowNotification(
                {
                    type: 'error',
                    message: error['response'].data.errors
                }
            )
        },
    })



    if (isPending) {
        return <span>Loading... in React query</span>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }
   

    return (
        <article>
            <PreviewPage />

            <Tabs tabsItems={[("API"), ("Rooms"), ("Extras"), ("Facilities"), ("Media")]}>
                <TabContentItem tabName="API">
                    <React.Suspense fallback={<Loading />}>
                        API content
                    </React.Suspense>

                </TabContentItem>
                <TabContentItem tabName="Rooms">
                    <React.Suspense fallback={<Loading />}>
                        Rooms content
                    </React.Suspense>
                </TabContentItem>
                <TabContentItem tabName="Extras">
                    <React.Suspense fallback={<Loading />}>
                        Extras content
                    </React.Suspense>
                </TabContentItem>
                <TabContentItem tabName="Facilities">
                    <React.Suspense fallback={<Loading />}>
                        Facilities content
                    </React.Suspense>
                </TabContentItem>
                <TabContentItem tabName="Media">
                    <React.Suspense fallback={<Loading />}>
                        Media content
                    </React.Suspense>
                </TabContentItem>
            </Tabs>

            Real Estate
            {isSuccess &&
                <div>
                    <input type="text" value={data.name} onChange={(event) => { toUpdateQueryData({ name: event.target.value }) }} />
                    <input type="text" value={data.address} onChange={(event) => { toUpdateQueryData({ address: event.target.value }) }} />
                    <textarea value={data.propertyDescription} onChange={(event) => { toUpdateQueryData({ propertyDescription: event.target.value }) }} ></textarea>
                    <textarea value={data.locationDescription} onChange={(event) => { toUpdateQueryData({ locationDescription: event.target.value }) }} ></textarea>
                    <button onClick={() => { mutate()}}> Update </button>
                </div>
            }
        </article>
    )
} 