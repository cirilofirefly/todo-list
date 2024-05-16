import TodoListTable from "../components/TodoListTable";
import { Todo } from "../types/enums/Todo";
import TodoActions from "./TodoActions";

export default function TodoList({ todos } : { todos: Todo[] }) {
  
    return (
      <>
        <div className="space-y-4">
          <TodoActions />
          <TodoListTable todos={todos} />
        </div>
      </>
    );
  }