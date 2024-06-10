import { Navbar, Sidebar, TodosArea, TodosAreaUser } from "../../../components"
 
export const UserPage = () => {
  return (
    <div className="container d-grid-2">
      <Navbar/>
      <Sidebar/>
      <TodosAreaUser/>
    </div>
  )
}
