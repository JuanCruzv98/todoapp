import { AddTodo,TodoList } from "./"
import dummyAPI from "../api/todoAPI";
import { PaginationSimple } from "./PaginationSimple";


export const TodosArea = () => {
  

  return (
        <main className="todos-contaner">
            <AddTodo/>
            <TodoList todos={[]}/>
        </main>
  )
}
