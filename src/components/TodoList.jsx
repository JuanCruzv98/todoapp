import { Todo } from "./Todo"

export const TodoList = ({todos=[]}) => {
  return (
    <div className="todos-list" id="todosList">
        {
          (todos.length > 0)?todos.map((todo,index)=>(
            <>
              <Todo todo={todo} key={index}/>
            </>
          )):(<>
            <div>Nothing</div>
          </>)
        }
    </div>
  )
}
