import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../CommonaPages/PageNotFound";
import AdminDashboard from "../Admin-Panel/Admin-Dashboard/admin-dashboard";

const AllRoutes= ()=>{
    return (
        <Routes>
            {/* AdminDashboardRoutes */}
            <Route path="/admin-panel" Component={AdminDashboard}>


                
            </Route>
            <Route path="*" Component={PageNotFound} />
        </Routes>
    )
}
export default AllRoutes;