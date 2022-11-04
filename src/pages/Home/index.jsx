import React from 'react'
import { Header } from '../../components/header'
import { Navbar } from '../../components/navbar'
import { Projects } from '../../components/Projects'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <Projects />
    </div>
  )
}

export {Home}