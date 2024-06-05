import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, DashboardRoutes} from "./";

export const AppRouter = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<></>}/>
        <Route path="/register" element={<></>}/>
        <Route path="/dashboard/*" element={<DashboardRoutes/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
   </>
  )
}
