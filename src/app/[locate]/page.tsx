'use client'

import CheckAuthentication from '@/components/CheckAuthentication';
import {useTranslations} from 'next-intl';


export default function Page() {
const t = useTranslations('Index');
console.log(t)



  return (
    <CheckAuthentication>
     <h1>main</h1>
      <p>hello</p>
     
    {/* <h1>{t('title')}</h1>  */}
    
    </CheckAuthentication>
   
  )
}
