
'use client'
import React, { lazy } from "react";
import axios from "@/lib/axios"
import { useQuery } from '@tanstack/react-query'
import { IEstateProperty } from '@/Interfaces/IEstateProperty'
import PreviewPage from "@/components/PreviewPage"
import { useEffect, useState } from "react"
import Tabs from "@/components/Tabs/Tabs"
import TabContentItem from "@/components/Tabs/TabContentItem"
import Loading from "@/components/Loading";


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