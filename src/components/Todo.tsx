import {Todo} from '@/Interfaces/ITodo'

export default function Todo({ userId, id, title, completed }: Todo) {
  
    return (
        <div className="Todo">
            <p>Todo id: {id}</p>
            <p>User id: {userId}</p>
            <p>Title: {title}</p>
            <p>Completed: {completed ? 'yes' : 'no'}</p>
        </div>
    )
}