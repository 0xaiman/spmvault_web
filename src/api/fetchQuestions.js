//Thsi function fetchs questions sets from the server
// subject year and examination-id are used as refrence params on BE side

export    async function fetchQuestions(subject,year,examination_id,setQuestionData,setLoading,setError) {
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_API_URL}/fetch-questions/${subject}/${year}/${examination_id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }

      const responseData = await response.json();
      setQuestionData(responseData.questionData); // Set questionData to fetched response
      setLoading(false); // Update loading state because response received

    } catch (error) {
      setLoading(false);
      setError("Error loading question from Server ");
    }
  }