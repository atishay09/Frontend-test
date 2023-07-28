import React from 'react'
import {BiLogOut} from "react-icons/bi"
import './header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
   const navigate = useNavigate()
   const logout = ()=>{
      const yes = window.confirm("Are you sure want to Logout");
      if(yes){
         // remove the token and empty the store;
         navigate("/login")
      }
   }
  return (
    <header className='header'>
      <div className="logo">
         <h5 className='mb-0'>Infinite Scroll Cards</h5>
      </div>
      <div className="log-out" onClick={logout}>
         <BiLogOut size={28}/>
      </div>
    </header>
  )
}

export default Header