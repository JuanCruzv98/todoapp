import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes"

export const TodoApp = () => {
  return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
  )
}
