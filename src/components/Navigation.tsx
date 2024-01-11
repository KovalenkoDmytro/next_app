import Link from 'next/link'
import LogOut from '@/components/LogOut';

export default function Navigation({locate}:{locate: string}){
    // const a = `${locate}/estateroperties`
    return (
        <nav>
             <Link href="/todos">Todos</Link>
             <Link href={`${locate}/estate-properties`}>estate Properties</Link>
             <LogOut/>
        </nav>
    )
}