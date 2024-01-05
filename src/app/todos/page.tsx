import Todos from "@/components/Todos";

function getRandomInt(count:number){
    return Math.floor(Math.random() * count); 
}

export default function Page(){
    const numb = getRandomInt(2)
    if(numb  === 1){
        throw new Error ('Error loadind view ')
    }
    return(
        <article>
            Todos page
            <Todos/>
        </article>
    )
} 