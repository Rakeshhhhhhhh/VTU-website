import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeScreen from './components/HomeScreen';
import ResultComponent from './components/ResultComponent';
import About from './components/About';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='/home' index={true} element={<HomeScreen/>}/>
    <Route path='/result' element={<ResultComponent/>}/>
    <Route path='/About' element={<About/>}/>
    
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
