import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Header/>
       <div className="min-h-[100vh]">
       <Outlet/>
       </div>
        <Footer/>
            
        </>
    );
};

export default App;