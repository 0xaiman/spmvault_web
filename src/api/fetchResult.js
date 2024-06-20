 // Fetch result from BE
 export const fetchResult = async (examination_id,subject,answersArray,setResultData,setLoading,setError) => {
    try {
      const username = sessionStorage.getItem("username");
      const time = sessionStorage.getItem("timeTaken");

      const responseResultFetch = await fetch(`${import.meta.env.VITE_API_URL}/fetch-attempt-result/${examination_id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          subject,
          userAnswer: answersArray,
          time: time
        })
      });

      const responseResultFetchData = await responseResultFetch.json();
      setResultData(responseResultFetchData);
      setLoading(false); // Update loading state because response received

    } catch (error) {
      console.log("ERROR fetchResult @QUestionLayout", error);
      setLoading(false);
      setError("Error loading question from Server :( Please Ensure You are Logged in");
    }
  };