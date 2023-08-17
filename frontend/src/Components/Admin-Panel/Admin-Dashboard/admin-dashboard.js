import "./admin-dashboard.css"
import { NavLink } from "react-router-dom";


const AdminDashboard = ()=>{

    return (
        <div id="adminPanelMainDiv">
            <div id="leftNavBar">
                <div id="leftNavBarTop">
                    <img src="../Images/KraftmeHeader-logo.png" className="topLogo"/>
                </div>
                <div id="leftNavBarMenu">
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="/admin-panel">Dashboard</NavLink></li>
                             <li><NavLink to="sale-channels">Channels</NavLink></li>
                             <li><NavLink to="tasks">Tasks</NavLink></li>
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="tasks">Tasks</NavLink></li>
                             <li><NavLink to="notes">Notes</NavLink></li>
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="orders">Orders</NavLink></li>
                             <li><NavLink to="enquiries">Enquiries</NavLink></li>
                             <li><NavLink to="purchases">Purchases</NavLink></li>
                             <li><NavLink to="quotations">Quotations</NavLink></li>
                             <li><NavLink to="expenses">Expenses</NavLink></li>
                             <li><NavLink to="indirect-income">Indirect Income</NavLink></li>

                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="products">Products & Services</NavLink></li>
                             <li><NavLink to="inventory">Inventory</NavLink></li>
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="payments">Payments</NavLink></li>
                             <li><NavLink to="customers">Customers</NavLink></li>
                             <li><NavLink to="vendors">Vendors</NavLink></li>
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="bank-accounts">Bank Account</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="rightSection">
                <p>RightSection</p>
            </div>
        </div>
    )
}

export default AdminDashboard;