'use client'

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
        </section>
    )
}