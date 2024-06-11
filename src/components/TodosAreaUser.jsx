import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TodoList } from './TodoList'
import dummyAPI from '../api/todoAPI';
import { PaginationSimple } from './PaginationSimple';

export const TodosAreaUser = () => {
  const location = useLocation();
  const {uid} = useParams();
  console.log(uid);
  const [todos,setTodos] = useState([]);
  const [page, setPage] = useState(1);
  
  const startToLoadTodos = async () => {
    const {data} = await dummyAPI.get(`/todos/user/${uid}?limit=25&skip=${(page-1)*25}`);
    
    if(data?.todos){
      console.log(data.todos)
      setTodos(data.todos);
    }
  }

  useState(async () => {
    if(new URLSearchParams(location.search).get('page')!==null){
      console.log(new URLSearchParams(location.search).get('page'))
      setPage(Number(new URLSearchParams(location.search).get('page')))
    }
  },[])
  console.log("hello");
  useEffect(() => {
    startToLoadTodos()
  }, [page]);
  return (
    <main className="todos-contaner mt-2">
        <TodoList todos={todos}/>
        
        <PaginationSimple page={page} setPage={setPage}  path={'/dashboard/user/'+uid}/>
    </main>
  )
}
