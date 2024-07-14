import {  useEffect, Suspense, useState } from 'react';
import Barchart from '../component/ui/Barchart/Barchart'
import Donutchart from '../component/ui/Donutchart/Donutchart'
import Header from '../component/ui/Header/Header'
import ProfileHeader from '../component/ui/ProfileHeader/ProfileHeader'
import { useNavigate, useSearchParams } from "react-router-dom";
import fetchDashboardData from '../api/fetchDashboardData';
import useDashboardData from '../hook/useDashboardData';

function deleteSessionStorage(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("lastLogin");
}

export const ProfilePage = () => {
  let [searchParams] = useSearchParams();
  const username = searchParams.get("username"); //params username in url
  const email =  sessionStorage.getItem("email");
  const lastLogin  = sessionStorage.getItem("lastLogin");
  // const profilePicturePath = sessionStorage.getItem("profilePicturePath");
  // const [profileImageURL, setProfileImageURL] = useState(sessionStorage.getItem("profilePicturePath"))
  // const [error,setError] = useState(null);
  // const [arraySubject,setArraySubject]=useState([])
  // const [averageScore ,setAverageScore] = useState({})
  // const [numberAttempt ,setNumberAttempt] = useState([])
  const navigate = useNavigate();



  useEffect(()=>{
    const storageUsername = sessionStorage.getItem("username");

    //if username in params doesnt match 
    //with username in sessionStorage,
    // ask user to login again
    if(!storageUsername|| storageUsername!== username){
      alert("Invalid Credentials, please log in again");
      deleteSessionStorage();
      navigate("/login");
    }

  // // fetchDashboardData
  // fetchDashboardData(username, setArraySubject,setAverageScore ,setNumberAttempt, setError);
  // 
  },[username]);

  const {arraySubject, averageScore, numberAttempt, error} = useDashboardData(username);

  return (
    <div className='bg-gray-100'>
      <Header/>
         <ProfileHeader 
         username={username}
         email ={email}
         lastLogin={lastLogin}
         />
        <div className='py-4 px-4'>
        <div id="chart-section" className=' max-w-screen-lg mx-auto   flex flex-col md:flex-row  bg-white shadow  sm:rounded-lg'>
          {arraySubject.length > 0 ? 
          <Suspense fallback={<div>Loading Charts...</div>}>
            <Donutchart
            numberAttempt={numberAttempt}
            arraySubject = {arraySubject}
            />
            <Barchart
            averageScore = {averageScore}
            arraySubject = {arraySubject}
            />
          </Suspense> :
        //  <div className={` my-auto text-center text-2xl font-semibold text-gray-400 w-full h-max bg-[url('../assets/media/dashboard/pie_chart.jpg')]`} >
        <div 
          className={`
            my-auto 
            text-center 
            text-2xl 
            font-semibold 
            text-gray-500 
            w-full 
            py-28
          `}

        >
          <h1>No Record Found for Analytics.</h1>

        </div>

          
        }
          </div>
        </div>
    </div>
   
  )
}
