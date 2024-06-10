import { TodoList } from './TodoList'
import dummyAPI from '../api/todoAPI';
import { PaginationSimple } from './PaginationSimple';

export const TodosAreaUser = () => {

  return (
    <main className="todos-contaner mt-2">
        <TodoList todos={[]}/>
    </main>
  )
}
