import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Users from './Users';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Main from "./Main";
import PageA from "./PageA";
import PageB from "./PageB";
import Db from "./Db";
import Home from "./Home";
let isLogged = true;





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Router>
<Routes>
  <Route path ="/" element={<Main/>}/>
  <Route path ="/home" element={<Home/>}/>
  <Route path ="/user/:fname/:lname" element={<Users/>}/>
  <Route path ="/a" element={<PageA/>}/>
  <Route path ="/b" element={<PageB/>}/>
  <Route path ="/nlog" element={<h1 className ="our">You are not Logged in! 🚫</h1>}/>
  <Route path ="/db" element={isLogged ? <Db/> : <Navigate to ="/nlog" replace/>}/>
  <Route path ="*" element={<h1 className ="our">Error! Page Not Found! ☹️</h1>}/>
  {/* <Route path ="/user/:fname/:lname" element={<Users/>}/> */}
</Routes>

</Router>

);

