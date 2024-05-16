import { Todo } from "../types/enums/Todo";
import Button from "./Button";
export default function TodoItem({ todo } : { todo: Todo }) {
    return(
        <>
            <div className="flex space-x-2">
                <p>{todo.title} - {todo.description}</p>
                <div className="space-x-2">
                    <Button type={'button'} text={'Update'} color={'success'} />
                    <Button type={'submit'} text={'Delete'} color={'primary'} />
                </div>
            </div> 
        </>
    )
}