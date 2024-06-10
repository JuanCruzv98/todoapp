import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, DashboardRoutes,AuthPage, RegisterPage} from "./";

export const AppRouter = () => {

  return (
   <>
    <Routes>

           <Route path="/" element={<HomePage/>}/>
           <Route path="/auth" element={<AuthPage/>}/>
           <Route path="/*" element={<Navigate to="/"/>}/>
           <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard/*" element={<DashboardRoutes/>}/>
            <Route path="/*" element={<Navigate to="/dashboard"/>}/>
        
    </Routes>
   </>
  )
}
