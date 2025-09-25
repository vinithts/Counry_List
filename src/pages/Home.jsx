import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <div>
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Home
