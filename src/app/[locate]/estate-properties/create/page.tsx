'use client'

import { IEstateProperty } from "@/Interfaces/IEstateProperty"
import axios from "@/lib/axios"
import toShowNotification from "@/lib/notification"
import { error } from "console"
import { useState } from "react"


export default function Page(){
    const [estateProperty, setEstateProperty] = useState<IEstateProperty>({
        name: '',
        propertyDescription: '',
        address: '',
        locationDescription: '',
    })

    const toCreate = () => {
         axios.post('/api/estate-properties', estateProperty)
         .then(response => {toShowNotification(response.data)})
         .catch(error=>{alert(error.message)})
      };


    return(
        <article>
            <h1>Create estatePropery unit</h1>
            <input type="text" onChange={(event)=>{setEstateProperty({...estateProperty, name : event.target.value})}} />
            <input type="text" onChange={(event)=>{setEstateProperty({...estateProperty, propertyDescription : event.target.value})}} />
            <input type="text" onChange={(event)=>{setEstateProperty({...estateProperty, address : event.target.value})}} />
            <input type="text" onChange={(event)=>{setEstateProperty({...estateProperty, locationDescription : event.target.value})}} />
            
            
            <button onClick={toCreate}> Send </button>
        </article>
    )
}