'use client'
import Link from 'next/link'
type EstatePropertyProps = {
    id: number,
    name: string,
    address: string
}

export default function EstateProperty ({ id, name, address, }: EstatePropertyProps){


    return(
        <section>
            <p>id : {id}</p>
            <h2>name : {name}</h2>
            <p>address : {name}</p>
            <Link href={`estate-properties/${id}`}>Edit</Link>
        </section>
    )
}