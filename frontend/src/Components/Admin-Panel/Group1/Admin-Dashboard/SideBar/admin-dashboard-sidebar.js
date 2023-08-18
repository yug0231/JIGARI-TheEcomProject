import "./admin-dashboard-sidebar.css"
import { NavLink, Outlet } from "react-router-dom";


const AdminDashboardSidebar = ()=>{

    return (
        <div id="adminPanelMainDiv">
            <div id="leftNavBar">
                <div id="leftNavBarTop">
                    <img src="../Images/KraftmeHeader-logo.png" className="topLogo"/>
                </div>
                <div id="leftNavBarMenu">
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="/admin-panel" >Dashboard</NavLink></li>
                             <li>
                                     <div className="sideBarTitle">
                                     <span><i class="bi bi-cash"></i>Sales Channels</span>
                                     <i class="bi bi-chevron-down toggle-btn"></i>
                                     </div>
                                    <div className="sideBar-Items">
                                        <NavLink to="kraftme">Kraftme</NavLink>
                                        <NavLink to="jigari">Jigari</NavLink>
                                        <NavLink to="amazon">Amazon</NavLink>
                                        <NavLink to="flipkart">Flipkart</NavLink>
                                        <NavLink to="offline">Offline</NavLink>
                                    </div>
                             </li>
                             {/* <select name="Sales Channel" id="sales-channel">
                                <option value=""><NavLink to="" >Sales Channel</NavLink></option>
                                <option value="amazon"><NavLink to="amazon" >Amazon</NavLink></option>
                                <option value="flipkart"><NavLink to="flipkart" >Flipkart</NavLink></option>
                            </select> */}
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="tasks">Tasks</NavLink></li>
                             <li><NavLink to="notes">Notes</NavLink></li>
                             <li><NavLink to="calendar">Calendar</NavLink></li>
                             
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="sales">
                             <div className="sideBarTitle">
                                     <span><i class="bi bi-cash"></i>Sales</span>
                                     <i class="bi bi-chevron-down toggle-btn"></i>
                             </div></NavLink></li>
                             <div className="sideBar-Items">
                                        <NavLink to="invoices">Invoices</NavLink>
                                        <NavLink to="creditnotes">Credit Notes</NavLink>
                            </div>
                             <li><NavLink to="enquiries">Enquiries</NavLink></li>
                             <li><NavLink to="purchases">Purchases</NavLink></li>
                             <li><NavLink to="quotations">Quotations</NavLink></li>
                             <li><NavLink to="expenses">Expenses</NavLink></li>
                             <li><NavLink to="indirectIncome">Indirect Income</NavLink></li>

                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="products&services">Products & Services</NavLink></li>
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
                             <li><NavLink to="emails">Emails</NavLink></li>
                             <li><NavLink to="whatsappBot">Whatsapp-Bot</NavLink></li>
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="cash&bank">Cash & Bank</NavLink></li>
                             <li><NavLink to="authentications">Authentications</NavLink></li>
                             <li><NavLink to="allusers">All Users</NavLink></li>
                             <li><NavLink to="payrolls">Payrolls</NavLink></li>
                        </ul>
                    </div>
                    <div id="leftNavBarMenu-parts">
                        <ul>
                             <li><NavLink to="reports">Reports</NavLink></li>
                             <li><NavLink to="legals">Legal</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="rightSection">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminDashboardSidebar;