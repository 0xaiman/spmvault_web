import { useState, useEffect } from 'react';
import Barchart from '../component/ui/Barchart/Barchart'
import Donutchart from '../component/ui/Donutchart/Donutchart'
import Header from '../component/ui/Header/Header'
import ProfileHeader from '../component/ui/ProfileHeader/ProfileHeader'
import { useNavigate, useSearchParams } from "react-router-dom";



export const ProfilePage = () => {
  let [searchParams] = useSearchParams();
  const username = searchParams.get("username"); //params username in url
  // const  id = sessionStorage.getItem("id");
  const email =  sessionStorage.getItem("email");
  const lastLogin  = sessionStorage.getItem("lastLogin");
  const navigate = useNavigate();

  function deleteSessionStorage(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("lastLogin");
}

  useEffect(()=>{
    const storageUsername = sessionStorage.getItem("username");

    //if username in params doesnt match 
    //with username in sessionStorage,
    // ask user to login again
    if(!storageUsername|| storageUsername!== username){
      alert("Invalid Username");
      deleteSessionStorage();
      navigate("/login");
    }
  },[username,navigate])


  return (
    <div className='bg-gray-100'>
    <Header/>
         <ProfileHeader 
         username={username}
         email ={email}
         lastLogin={lastLogin}
         />
        <div className='py-4 px-4'>
        <div id="chart-section" className=' max-w-screen-xl mx-auto   flex flex-col md:flex-row  bg-white shadow  sm:rounded-lg'>
            <Donutchart/>
            <Barchart />

          </div>
        </div>
    </div>
   
  )
}
