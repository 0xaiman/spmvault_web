import {  useEffect, Suspense, useState } from 'react';
import Barchart from '../component/ui/Barchart/Barchart'
import Donutchart from '../component/ui/Donutchart/Donutchart'
import Header from '../component/ui/Header/Header'
import ProfileHeader from '../component/ui/ProfileHeader/ProfileHeader'
import { useNavigate, useSearchParams } from "react-router-dom";



export const ProfilePage = () => {
  let [searchParams] = useSearchParams();
  const username = searchParams.get("username"); //params username in url
  const email =  sessionStorage.getItem("email");
  const lastLogin  = sessionStorage.getItem("lastLogin");
  const [error,setError] = useState(null);
  const [averageScore ,setAverageScore] = useState({})
  const [numberAttempt ,setNumberAttempt] = useState([])
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
      alert("Invalid Credentials, please log in again");
      deleteSessionStorage();
      navigate("/login");
    }

  // fetchDashboardData
  async function fetchDashboardData(username){
    try{
      // get token for isAuth middleware verification
      const token = sessionStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_API_URL}/dashboard/${username}`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch dashboardData');
      }

      const responseData = await response.json();

      const responseAttemptData = responseData.numberOfAttemptList
      const responseAvgScoreData = responseData.avgScoreList
      // todo : save to cache, minimize api call, and refactor

      //convert number of attempt into number format
      const formattedAttemptList = responseAttemptData.map(item => {
         return isNaN(Number(item)) ? 0 : Number(item);
      });

       //convert avgscore into number format
       const formattedAvgScoreList = responseAvgScoreData.map(item => {
        return isNaN(Number(item)) ? 0 : Number(item);
     });

      setAverageScore(formattedAvgScoreList);
      setNumberAttempt(formattedAttemptList);
    }catch(error){
      setError("Error loading dashboardData from Server ");
    }

  }

  fetchDashboardData(username);

  // 


  },[username]);

  console.log("avgscore",averageScore)
  console.log("num attempt", numberAttempt)


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
          <Suspense fallback={<div>Loading Charts...</div>}>
            <Donutchart
            numberAttempt={numberAttempt}
            />
            <Barchart
            averageScore = {averageScore}
            
            />
          </Suspense>
          </div>
        </div>
    </div>
   
  )
}
