'use client'

import { IEstateProperty } from "@/Interfaces/IEstateProperty"
import axios from "@/lib/axios"
import toShowNotification from "@/lib/notification"
import PreviewPage from "@/components/PreviewPage"
import { lazy, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import CheckAuthentication from "@/components/CheckAuthentication"
import Tabs from "@/components/Tabs/Tabs"
import TabContentItem from "@/components/Tabs/TabContentItem"
import Loading from "@/components/Loading"
import React from "react"
import Input from "@/components/Input"

export default function Page() {
    const [estateProperty, setEstateProperty] = useState<IEstateProperty>({
        name: '',
        propertyDescription: '',
        address: '',
        locationDescription: '',
        media: [] ,
    })

    const [errors, setErrors] = useState<IEstateProperty>({
        name: '',
        propertyDescription: '',
        address: '',
        locationDescription: '',
    })


    const toCreate = async (data: IEstateProperty) => {
        const resp = await axios.post('/api/estate-properties', data)
        return resp.data
    };

    const client = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: toCreate,
        onSuccess: (data) => {
            client.invalidateQueries({ queryKey: ['estate-properies'] })
            toShowNotification(data)
        },
        onError(error) {
            setErrors(error['response'].data.errors)
            toShowNotification(
                {
                    type: 'error',
                    message: error['response'].data.errors
                }
            )
        },
    })
    
    const Media = lazy(()=>import('@/components/MedialLoad'))

    return (
        <CheckAuthentication pageTitle='Create estate property'>
            <PreviewPage />
            <Tabs tabsItems={[("General information"), ("Units"), ("Media")]}>
                <TabContentItem tabName="General information">
                    <React.Suspense fallback={<Loading />}>
                        <Input
                            label="Name"  
                            name="name"
                            error={errors.name.toString()}
                            onChange={(event) => { setEstateProperty({ ...estateProperty, name: event.target.value }) }}
                        />
                        <Input
                            label="Description"  
                            name="propertyDescription"
                            error={errors.propertyDescription.toString()}
                            onChange={(event) => { setEstateProperty({ ...estateProperty, propertyDescription: event.target.value }) }}
                        />
                        <Input
                            label="address"  
                            name="address"
                            error={errors.address.toString()}
                            onChange={(event) => { setEstateProperty({ ...estateProperty, address: event.target.value }) }}
                        />
                        <Input
                            label="location description"  
                            name="locationDescription"
                            error={errors.locationDescription.toString()}
                            onChange={(event) => { setEstateProperty({ ...estateProperty, locationDescription: event.target.value }) }}
                        />
                    </React.Suspense>
                </TabContentItem>
                <TabContentItem tabName="Units">
                    <React.Suspense fallback={<Loading />}>

                        

                        Units
                    </React.Suspense>
                </TabContentItem>
                <TabContentItem tabName="Media">
                    <React.Suspense fallback={<Loading />}>
                        <Media globalState={estateProperty} setGlobalState={setEstateProperty}/>
                    </React.Suspense>
                </TabContentItem>

            </Tabs>

            <button className="btn _solid" onClick={() => { mutate(estateProperty) }}> Create </button>
        </CheckAuthentication>
    )
}