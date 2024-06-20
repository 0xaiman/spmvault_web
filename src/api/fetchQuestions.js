//Thsi function fetchs questions sets from the server
// subject year and examination-id are used as refrence params on BE side

export    async function fetchQuestions(subject,year,examination_id,setQuestionData,setLoading,setError) {
    try {
      const token = sessionStorage.getItem("token");
      const responseQuestionFetch = await fetch(`${import.meta.env.VITE_API_URL}/fetch-questions/${subject}/${year}/${examination_id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!responseQuestionFetch.ok) {
        throw new Error('Failed to fetch questions');
      }

      const responseDataQuestionFetch = await responseQuestionFetch.json();
      setQuestionData(responseDataQuestionFetch.questionData); // Set questionData to fetched response
      setLoading(false); // Update loading state because response received

    } catch (error) {
      setLoading(false);
      setError("Error loading question from Server ");
    }
  }