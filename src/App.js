import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes, Navigate} from "react-router-dom";
import React from "react";
import {routes} from "./router/router";


function App() {

    return (
        <div className='page-container'>
            <Header/>
            <main className="main">
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} element={route.element} path={route.path}/>
                    ))}
                    <Route path="/" element={<Navigate to="/posts" replace/>}/>
                    <Route path="*" element={<Navigate to="/posts" replace/>}/>
                </Routes>
            </main>
        </div>);
}

export default App;
