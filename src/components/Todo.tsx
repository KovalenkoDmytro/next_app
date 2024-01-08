import {Todo} from '@/Interfaces/ITodo'
import Image from 'next/image'

export default function Todo({ id, name, image_url, description }: Todo) {
  
    return (
        <div className="Todo">
            <Image src={image_url} alt={name} width={128} height={500}/>
            <p>Todo id: {id}</p>
            <p>Name id: {name}</p>
            <p>Description: {description}</p>
        </div>
    )
}