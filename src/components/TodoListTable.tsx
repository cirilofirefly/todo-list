import { Todo } from "../types/enums/Todo";
import TodoItem from "./TodoItem";

export default function TodoListTable({ todos } : { todos: Todo[] }) {
    return (
        <ul>
            {
                todos.map((todo: Todo, index: number) => (
                    <TodoItem key={index} todo={todo} />
                ))
            }
        </ul>
    );
}