"use client"
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Todo as ITodo} from '@/Interfaces/ITodo'
import Todo from '@/components/Todo'


export default function Todos(){
    const [todos, setTodos] = useState<Array<ITodo>>([]);
    const { isSuccess, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: async()=>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
            return response.data as Array<ITodo>
        },
    })

    useEffect(() => {
        if(isSuccess){
            setTodos(data)
        }
    }, [isSuccess, data])
   

    return(
        <div>
            <h1>Todos</h1>
            {todos.map(({...item}:ITodo, index:number) => {
                return <Todo {...item} key={index} />
            } )}
        </div>
    )
}