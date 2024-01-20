'use client'

import {useTranslations} from 'next-intl';

import { useContext  } from 'react'
import {GlobalContext} from '@/Hooks/providers/Context'
import Navigation from '@/components/Navigation'


export default function Home(props : {params :{locate: string}}) {
  const language = props.params.locate
  const { user } = useContext<GlobalContext>(GlobalContext);
  console.log(user)
  // const t = useTranslations('Index');



  return (
    <>
     
 
      {/* <h1>{t('title')}</h1> */}
      <header className='header'>
                page name
              </header>
      <h1>main</h1>
     
      
      {user.id !== 0 ? <><p>WELCOME</p> </>  : null}

    
    </>
    
  )
}
