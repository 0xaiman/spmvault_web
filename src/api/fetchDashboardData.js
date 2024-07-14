async function fetchDashboardData(username,  setArraySubject,setAverageScore ,setNumberAttempt,setError){
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
      // console.log(responseData)

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

  export default fetchDashboardData;