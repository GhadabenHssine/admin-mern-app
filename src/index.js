import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import 'react-toastify/dist/ReactToastify.css';


import { AuthContextProvider } from "./Admin/Context/authContext/authContext"
import { BrowserRouter } from "react-router-dom"
import { MoviesContextProvider } from './Admin/Context/movieContext/moviesContext';
import { UsersContextProvider } from './Admin/Context/userContext/usersContext';
import { ListsContextProvider } from './Admin/Context/listContext/listsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    <AuthContextProvider>
      <UsersContextProvider>
        <ListsContextProvider>


          <MoviesContextProvider>

            <App />

          </MoviesContextProvider>
        </ListsContextProvider>
      </UsersContextProvider>
    </AuthContextProvider>

  </BrowserRouter>


);


