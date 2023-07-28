import React from 'react'
import Card from './Card'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Home = () => {

   // const navigate = useNavigate();
   // useEffect(() => {
   //    if (!localStorage.getItem('token')) {
   //       navigate('/login');
   //    }
   // }, [])

   return (
      <>
         <Header />
         <div className='d-flex flex-wrap'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </>
   )
}

export default Home;
