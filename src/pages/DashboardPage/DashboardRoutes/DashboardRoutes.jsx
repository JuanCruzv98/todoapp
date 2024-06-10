import {Routes, Route, Navigate} from 'react-router-dom';
import { DashboardPage, UserPage } from '../';

export const DashboardRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="*" element={<DashboardPage/>}/>
            <Route path="user/:uid" element={<UserPage/>}/>
        </Routes>
    </>
  )
}
