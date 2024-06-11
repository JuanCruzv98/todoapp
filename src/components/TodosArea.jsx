import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { AddTodo } from "./AddTodo"
import { TodoList } from "./TodoList"
import dummyAPI from "../api/todoAPI";
import { PaginationSimple } from "./PaginationSimple";


export const TodosArea = () => {
  const location = useLocation()
  const [todos,setTodos] = useState([]);
  const [page, setPage] = useState(1);
  
  const startToLoadTodos = async () => {
    const {data} = await dummyAPI.get(`/todos?limit=25&skip=${(page-1)*25}`);
    
    if(data?.todos){
      console.log(data.todos)
      setTodos(data.todos);
    }
  }

  useState(async () => {
    if(new URLSearchParams(location.search).get('page')!==null){
      setPage(Number(new URLSearchParams(location.search).get('page')))
    }
  },[])
  
  useEffect(() => {
    startToLoadTodos()
  }, [page]);

  return (
        <main className="todos-contaner">
            <AddTodo/>
            <TodoList todos={todos}/>
            <PaginationSimple page={page} setPage={setPage} path={'/dashboard'}/>
        </main>
  )
}

