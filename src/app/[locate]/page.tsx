'use client'

import {useTranslations} from 'next-intl';
import LogOut from '@/components/LogOut';
import { useContext  } from 'react'
import {GlobalContext} from '@/Hooks/providers/Context'



export default function Home() {

  const { user } = useContext<GlobalContext>(GlobalContext);
  console.log(user)
  // const t = useTranslations('Index');



  return (
    <main>
    {/* <h1>{t('title')}</h1> */}
    <h1>main</h1>
    <LogOut/>
    {user.id !== 0 ? <><p>WELCOME</p> </>  : null}
    </main>
  )
}
