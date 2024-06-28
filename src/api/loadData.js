import {fetchViewQuestionSets} from "./fetchViewQuestionSets";


//This code is responsible for managing data fetching and caching for a component. 
// The fetch script from fetchViewQuestionSets are managed into setMenuList
//which is stored in sessionSTorage.
//The reason why to store in session storage is to minimize API calls
// everytime users load the Question Menu Page

const loadData = async(setMenuList,setError)=>{
    try{
    
    //check if data alrdy in cache, if not call API
    const cachedData = sessionStorage.getItem("questionSetsMenu");

    if(cachedData && cachedData !==undefined){
        setMenuList(JSON.parse(cachedData))
    }else{
        const fetchResponse =  await fetchViewQuestionSets();
        sessionStorage.setItem("questionSetsMenu",JSON.stringify(fetchResponse.data))
        setMenuList(fetchResponse.data);
        // console.log(fetchResponse.data);
    }
    }catch(error){
        console.log("Error at QuestionMenuPage useEffect:",error)
        setError("Failed fetching menu Data")
    }
}

export default loadData