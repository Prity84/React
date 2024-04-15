import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Layout from './Component/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />}
      
      />
      <Route path = 'about' element ={<About />}/>
      <Route path = 'contact' element = {<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
    <App />
  </React.StrictMode>,
)
