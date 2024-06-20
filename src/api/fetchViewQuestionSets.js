//  This is an asynchronous function that logs a message when called, makes a GET request
//  to an API endpoint to fetch data, 
// converts the response to JSON, and returns the resulting data.
// This fetch is for calling all Menu Card component data.


export async function  fetchViewQuestionSets(){

    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/read-exam-set`,{
            
                method:"GET",
                headers:{
                        'Content-Type': 'application/json'
                }
            } )

            const data = await response.json()
            return data
}
