import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../login/login";

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route exact path = "/login" element = {<Login/>}></Route>
                <Route path = "*" element = {(
                    <h1 style={{marginTop:300}}>404 <br/>Pagina no encontrada</h1>
                    )}
                />
            </Routes>
        </Router>
     );
}

