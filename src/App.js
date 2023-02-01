import { Fragment } from 'react';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs';
import ForTutors from './Components/ForTutors/ForTutors';
import DcForSchools from './Components/DcForSchools/DcForSchools';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Fragment><Header/><Home/><Footer/></Fragment>} /> 
                <Route path="/about-us" element={<Fragment><Header/><AboutUs/><Footer/></Fragment>} /> 
                <Route path="/blogs" element={<Fragment><Header/><Blog/><Footer/></Fragment>} /> 
                <Route path="/dc-for-schools" element={<Fragment><Header/><DcForSchools/><Footer/></Fragment>} /> 
                <Route path="/for-tutors" element={<Fragment><Header/><ForTutors/><Footer/></Fragment>} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
