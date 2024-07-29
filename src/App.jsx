import React from 'react'
import About from './components/About'
import Academics from './components/Academics'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Title from './components/Title'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel/>
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer'/>
      <Academics/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Gallery/>
      <Title subTitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>

    </div>
  )
}

export default App
