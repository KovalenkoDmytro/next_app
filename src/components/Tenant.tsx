'use client'
import Link from 'next/link'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toShowNotification from '@/lib/notification'
import axios from '@/lib/axios'
import { ITenant } from '@/Interfaces/ITenant'


export default function Tenant ( props : ITenant){
   
    const toRemove = async()=>{
        const resp =  await axios.delete(`/api/tenants/${props.id}`)
        return resp.data
    }
    const client = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: toRemove,
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
      if (isPending) {
        return <span>isPending... in React query</span>
    }
    
    return(
        <section>
            <p>id : {props.id}</p>
            <h2>firstName : {props.firstName}</h2>
            <p>lastName : {props.lastName}</p>
            <p>phone : {props.phone}</p>
            <p>email : {props.email}</p>
            <Link href={`tenants/${props.id}`}>Edit</Link>
            <button onClick={()=>{mutate()}}>Destroy</button>
        </section>
    )
}