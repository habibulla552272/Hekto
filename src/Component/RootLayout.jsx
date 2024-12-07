import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import EndFooter from './EndFooter';


const RootLayout = () => {
  return (
   <>
   <Header />
   <Navbar />
   <Outlet />
   <Footer />
   <EndFooter />
   
   </>
  );
}

export default RootLayout
