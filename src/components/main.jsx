import React from 'react'
import Footer from './footer'
import Nav from './nav';
import Info from './info';
import Flavours from './flavours';
import Home from './home';
import BirthdayCakes from './birthdayCakes';

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