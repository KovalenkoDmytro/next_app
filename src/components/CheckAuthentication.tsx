'use client'
import { Fragment, useContext } from 'react'
import { GlobalContext } from '@/Hooks/providers/Context'
import { useParams, useRouter } from "next/navigation"

export default function CheckAuthentication({ children, pageTitle }: { children: React.ReactNode, pageTitle?: string }) {

    const { user } = useContext<GlobalContext>(GlobalContext);
    const { locate } = useParams<{ locate: string }>()
    const router = useRouter()

    // if (user.id === 0) return router.push(`/${locate}/login`)



    return (
        <Fragment>
            {pageTitle && <header className='header container'>
                <h1>{pageTitle}</h1>
            </header>}

            <main className='container'>
                {children}
            </main>
        </Fragment>
    )




}