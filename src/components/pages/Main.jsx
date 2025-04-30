import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav';
import Info from './Info';
import Flavours from './Flavours';
import Home from './Home';
import BirthdayCakes from './BirthdayCakes';

const Main = () => {
  return (
    <>
      <Nav/>
      <Home/>
      <Info/>
      <Flavours/>
      <BirthdayCakes/>
      <Footer/>
    </>
  )
}

export default Main 