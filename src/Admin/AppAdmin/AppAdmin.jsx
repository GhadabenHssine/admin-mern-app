
import { Navigate, Route, Routes } from "react-router-dom"
import Sidebar from "../SideBar/Sidebar"
import TopBar from "../TopBar/TopBar"
import HomeAdmin from "../homeAdmin/HomeAdmin"
import UserList from "../userList/UserList"

import "./appAdmin.css"
import User from '../user/User'
import NewUser from '../newUser/NewUser'
import ProductList from '../productList/ProductList'
import Product from '../product/Product'
import NewProduct from "../newProduct/NewProduct"

import ListList from "../listList/ListList"
import List from "../List/List"
import NewList from "../newList/NewList"
import { useContext } from "react"
import { AuthContext } from "../Context/authContext/authContext"
import EditProfil from "../editProfile/EditProfil"




const AppAdmin = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>

            <TopBar />
            <div className='container'>
                <Sidebar />
                <Routes>

                    <Route path="/" element={user ? <HomeAdmin /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/users" element={user ? <UserList /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/user/:UserId" element={user ? <User /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/newUser" element={user ? <NewUser /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/product" element={user ? <ProductList /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/lists" element={user ? <ListList /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/lists/:productId" element={user ? <List /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/product/:productId" element={user ? <Product /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/newProduct" element={user ? <NewProduct /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/newList" element={user ? <NewList /> : <Navigate to="/loginAdmin" />} />
                    <Route path="/editProfil" element={user ? <EditProfil /> : <Navigate to="/loginAdmin" />} />
                </Routes>

                {/* Same as */}
                {/* <ToastContainer /> */}
            </div>
        </div>
    )
}

export default AppAdmin