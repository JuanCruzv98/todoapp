import { Link } from "react-router-dom"
import { Navbar, Sidebar, TodosArea } from "../../../components"

export const DashboardPage = () => {
  return (
   <div className="container d-grid-2">
      <Navbar/>
      <Sidebar/>
      <TodosArea/>
   </div>
   
  )
}
