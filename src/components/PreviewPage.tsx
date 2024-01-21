'use client'

import { useRouter } from "next/navigation"

export default function PreviewPage( {...props}:{url? : string|undefined}){
    const router = useRouter();

    const toPreviewPage = ()=>{
        props.url !== undefined ? router.push(props.url) : router.back()
    }

    return (
        <button className="btn _solid" onClick={toPreviewPage}>Back to preview page</button>
    )
}