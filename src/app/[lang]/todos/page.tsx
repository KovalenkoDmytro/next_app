import Todos from "@/components/Todos";
import {getDictionary} from "@/lib/dictionaries"
import { Locale } from "@/i18n.config";
function getRandomInt(count:number){
    return Math.floor(Math.random() * count); 
}

export default async function Page({params: { lang }}: {params: { lang: Locale }}){
    const numb = getRandomInt(2)
    if(numb  === 1){
        throw new Error ('Error loadind view ')
    }

    const dictionaty = await getDictionary(lang) // en

    console.log(dictionaty)

    return(
        <article>
            Todos page
            <Todos/>
            <button></button>
        </article>
    )
} 