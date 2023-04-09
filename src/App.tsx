import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Login} from './components/auth/Login';
import {Signup} from './components/auth/Signup';
import {useAuth} from './store/auth';
import {Header} from './components/common/Header';

function App() {
    const auth = useAuth();


    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/login" element={auth.isLoggedIn ? <Navigate to="/"/> : <Login/>}/>
                <Route path="/signup" element={auth.isLoggedIn ? <Navigate to="/"/> : <Signup/>}/>
                <Route path="/" element={auth.isLoggedIn ? <h1>Home - Logged In</h1> : <Navigate to="/login"/>}/>
            </Routes>
        </Router>
    );
}

export default App;

