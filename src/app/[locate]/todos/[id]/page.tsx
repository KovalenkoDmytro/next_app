export default function Page({ params }: { params: { id: number } }){

    return(
        <article>
            Todo id - {params.id}
        </article>
    )
} 