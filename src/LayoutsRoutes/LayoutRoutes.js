import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Header from './../components/Header/Header'
import Footer from './../components/Footer/Footer'
import Plans from './../components/pages/plans/plans'
import Courses from './../components/pages/courses/course'
import About from './../components/about/about'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
