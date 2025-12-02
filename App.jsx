import { useState } from 'react'
import { Routes, Route, Router } from "react-router-dom"
import { Link } from "react-router-dom"
import './App.css'
import MainCard from './components/MainCard'
import Header from './components/Header'
import SecondaryCards from './components/SecondaryCards'
import Content from './components/Content'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Sign from './components/Sign'
import supabase from './config/supabaseClient'
import BlogCards from './components/BlogCards'
import Blogs from './components/Blogs'
import YourInterest from './components/YourInterest'
function App() {
  return (
    <div className='mx-10 mt-4'>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/your_interests" element={<YourInterest/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </div>
  )
}

export default App
