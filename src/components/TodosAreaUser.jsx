import { useEffect,useState } from "react";
import { useParams,useLocation } from 'react-router-dom';
import { TodoList } from './TodoList'
import dummyAPI from '../api/todoAPI';
import { PaginationSimple } from './PaginationSimple';

export const TodosAreaUser = () => {
  const {uid} = useParams();
  const location = useLocation();
  const [todos,setTodos] = useState([]);
  const [page,setPage] = useState(0);
  
  const startLoadingTodos = async ()=>{
    const {data} = await dummyAPI.get(`/todos/user/${uid}?limit=25&skip=${(page-1)*25}`);
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
    <main className="todos-contaner mt-2">
        <TodoList todos={todos}/>
        <PaginationSimple page={page} setPage={setPage} path={`/dashboard/user/${uid}`}/>
    </main>
  )
}
