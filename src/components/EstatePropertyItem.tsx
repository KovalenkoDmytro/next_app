'use client'
import Link from 'next/link'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toShowNotification from '@/lib/notification'
import axios from '@/lib/axios'

type EstatePropertyProps = {
    id: number,
    name: string,
    address: string
}

export default function EstateProperty ({ id, name, address, }: EstatePropertyProps){
   
    const toRemove = async()=>{
        const resp =  await axios.delete(`/api/estate-properties/${id}`)
        return resp.data
    }
    const client = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: toRemove,
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
      if (isPending) {
        return <span>isPending... in React query</span>
    }
    
    return(
        <section>
            <p>id : {id}</p>
            <h2>name : {name}</h2>
            <p>address : {address}</p>
            <Link href={`estate-properties/${id}`}>Edit</Link>
            <button onClick={()=>{mutate()}}>Destroy</button>
        </section>
    )
}