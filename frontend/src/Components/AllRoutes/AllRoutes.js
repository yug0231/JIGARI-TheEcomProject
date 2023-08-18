import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../CommonaPages/PageNotFound";
import saleChannels from "../Admin-Panel/Group1/SalesChannels/saleChannels";
import tasks from "../Admin-Panel/Group2/Tasks/tasks";
import AdminDashboardSidebar from "../Admin-Panel/Group1/Admin-Dashboard/SideBar/admin-dashboard-sidebar";
import adminDashboard from "../Admin-Panel/Group1/Admin-Dashboard/adminDashboard";
import Notes from "../Admin-Panel/Group2/Notes/Notes";
import Calendar from "../Admin-Panel/Group2/Calendar/Calendar"
import Enquiries from "../Admin-Panel/Group3/Enquiries/Enquiries";
import Purchases from "../Admin-Panel/Group3/Purchases/Purchases";
import Quotations from "../Admin-Panel/Group3/Quotations/Quotations";
import Expenses from "../Admin-Panel/Group3/Expenses/Expenses";
import IndirectIncome from "../Admin-Panel/Group3/IndirectIncome/IndirectIncome";
import ProductsServices from "../Admin-Panel/Group4/Products&Services/Products&Services";
import Inventory from "../Admin-Panel/Group4/Inventory/Inventory";
import Payments from "../Admin-Panel/Group5/Payments/Payments";
import Customers from "../Admin-Panel/Group5/Customers/Customers";
import Vendors from "../Admin-Panel/Group5/Vendors/Vendors";
import Emails from "../Admin-Panel/Group6/Emails/Emails";
import WhatsappBot from "../Admin-Panel/Group6/WhatsappBot/WhatsappBot";
import CashBank from "../Admin-Panel/Group7/Cash&Bank/CashBank";
import Authentications from "../Admin-Panel/Group7/Authentications/Authentications";
import AllUsers from "../Admin-Panel/Group7/AllUsers/AllUsers";
import Payrolls from "../Admin-Panel/Group7/Payrolls/Payrolls";
import Ledgers from "../Admin-Panel/Group7/Ledgers/Ledgers";
import Legal from "../Admin-Panel/Grpup8/Legal/Legal";
import Reports from "../Admin-Panel/Grpup8/Reports/Reports";
import Sales from "../Admin-Panel/Group3/Sales/Sales";

const AllRoutes= ()=>{
    return (
        <Routes>
            {/* AdminDashboardRoutes */}
            <Route path="/admin-panel" Component={AdminDashboardSidebar}>
                {/* DefaultRightOutletComponent */}
                {/* Group1 */}
                <Route index Component={adminDashboard}/>
                <Route path="sale-channels" Component={saleChannels}/>
                {/* Group2*/}
                <Route path="tasks" Component={tasks}/>  
                <Route path="notes" Component={Notes}/> 
                <Route path="calendar" Component={Calendar}/> 
                {/* Group3 */}
                <Route path="sales" Component={Sales}/> 
                <Route path="enquiries" Component={Enquiries}/> 
                <Route path="purchases" Component={Purchases}/> 
                <Route path="quotations" Component={Quotations}/> 
                <Route path="expenses" Component={Expenses}/> 
                <Route path="indirectIncome" Component={IndirectIncome}/> 
                {/* Group4 */}
                <Route path="products&services" Component={ProductsServices}/> 
                <Route path="inventory" Component={Inventory}/>
                {/* Group5 */}
                <Route path="payments" Component={Payments}/>  
                <Route path="customers" Component={Customers}/> 
                <Route path="vendors" Component={Vendors}/>
                {/* Group6 */}
                <Route path="emails" Component={Emails}/>  
                <Route path="whatsappBot" Component={WhatsappBot}/> 
                {/* Group7 */}
                <Route path="cash&bank" Component={CashBank}/> 
                <Route path="authentications" Component={Authentications}/> 
                <Route path="allusers" Component={AllUsers}/> 
                <Route path="payrolls" Component={Payrolls}/>
                <Route path="ledgers" Component={Ledgers}/>
                {/* Group8 */}
                <Route path="legals" Component={Legal}/>
                <Route path="reports" Component={Reports}/>
            </Route>
            <Route path="*" Component={PageNotFound} />
        </Routes>
    )
}
export default AllRoutes;