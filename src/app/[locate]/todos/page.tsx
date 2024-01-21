import Todos from "@/components/PropertyUnits/PropertyUnits";
import { useTranslations } from "next-intl";
function getRandomInt(count:number){
    return Math.floor(Math.random() * count); 
}

export default  function Page(){
    // const numb = getRandomInt(2)
    // if(numb  === 1){
    //     throw new Error ('Error loadind view ')
    // }
    
    return(
        <article>
            Todos page
            <Todos/>
            <button>{}</button>
        </article>
    )
} 