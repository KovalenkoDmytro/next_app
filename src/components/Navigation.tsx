'use client'

import Link from 'next/link'
import LogOut from '@/components/LogOut';
import Logo from './Logo';
import { useParams, usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname()
    const { locate } = useParams()
  
    return (
        <section className='navigation container'>
            <Logo/>
            <nav className='navigation__links'>
                <Link
                    className={`navigation__link ${pathname.includes('estate-properties') ? '_active' : ''}`}
                    href={`/${locate}/estate-properties`}>estate Properties
                </Link>
                <Link
                    className={`navigation__link ${pathname.includes('tenants') ? '_active' : ''}`}
                    href={`/${locate}/tenants`}>tenants
                </Link>
            </nav>
            <div>
                userInfo
                <LogOut />
            </div>
        </section>
    )
}