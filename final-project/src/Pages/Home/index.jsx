import React from 'react'
import Hero from '../../Components/Hero'
import Furniture from '../../Components/Furniture'
import Projects from '../../Components/Projects'  
import Feature from '../../Components/Feature'
import Impress from '../../Components/Impress'
import OurBlog from '../../Components/OurBlog'
import ClietsLogo from '../../Components/ClientsLogo'

function Home() {
  return (
    <>
        <Hero/>
        <Furniture/>
        <Projects/>
        <Feature/>
        <Impress/>
        <OurBlog/>
        <ClietsLogo/>
    </>
  )
}

export default Home