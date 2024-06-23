import {  useEffect, Suspense, useState } from 'react';
import Barchart from '../component/ui/Barchart/Barchart'
import Donutchart from '../component/ui/Donutchart/Donutchart'
import Header from '../component/ui/Header/Header'
import ProfileHeader from '../component/ui/ProfileHeader/ProfileHeader'
import { useNavigate, useSearchParams } from "react-router-dom";
import bgImageDashboardNotFound from '../assets/media/dashboard/pie_chart.jpg'


const backgroundImageStyle = {
  backgroundImage: `url${bgImageDashboardNotFound}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
};

export const ProfilePage = () => {
  let [searchParams] = useSearchParams();
  const username = searchParams.get("username"); //params username in url
  const email =  sessionStorage.getItem("email");
  const lastLogin  = sessionStorage.getItem("lastLogin");
  const [error,setError] = useState(null);
  const [arraySubject,setArraySubject]=useState([])
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
      console.log(responseData)

      const responseSubjectArrayData = responseData.arraySubject;
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

     setArraySubject(responseSubjectArrayData)
      setAverageScore(formattedAvgScoreList);
      setNumberAttempt(formattedAttemptList);
    }catch(error){
      setError("Error loading dashboardData from Server ");
    }

  }

  fetchDashboardData(username);

  // 


  },[username]);



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
