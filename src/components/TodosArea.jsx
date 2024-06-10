import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { AddTodo,TodoList } from "./";
import { PaginationSimple } from "./PaginationSimple";
import dummyAPI from "../api/todoAPI";

export const TodosArea = () => {
  const location = useLocation();
  const [todos,setTodos] = useState([]);
  const [page,setPage] = useState(0);
  
  const startLoadingTodos = async ()=>{
    const {data} = await dummyAPI.get(`/todos?limit=25&skip=${(page-1)*25}`);
    if(data.todos){
      setTodos(data.todos);
    }
  }
  useEffect(() => {
    if(new URLSearchParams(location.search).get('page')!==null){
      setPage(Number(new URLSearchParams(location.search).get('page')));
    }
  },[]);

  useEffect(() => {
    if(sessionStorage.getItem("username")){
      startLoadingTodos();
    }
  }, [page]);

  return (
        <main className="todos-contaner">
            <AddTodo/>
            <TodoList todos={todos}/>
            <PaginationSimple page={page} setPage={setPage} path={"/dashboard"}/>
        </main>
  )
}
