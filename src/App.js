import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';


const App = () =>
{
    return (
        <div>
        <Navbar/>
       <Home/>
        <Main/>
        <Footer/>
        </div>


    )
}
export default App