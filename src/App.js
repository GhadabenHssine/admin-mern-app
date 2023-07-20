import React, { useContext } from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import Admin from "./Admin/AppAdmin/AppAdmin"
import Home from "./Admin/homeAdmin/HomeAdmin"
import Login from './Admin/login/Login';
import { AuthContext } from './Admin/Context/authContext/authContext';
import { ToastContainer } from 'react-toastify';







const App = () => {
    const { user } = useContext(AuthContext)
    return (
        <div >
            <Routes>
                <Route path="/loginAdmin" element={user ? <Navigate to="/" /> : < Login />} />

            </Routes>
            {user && <Admin />}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default App