import Header from "../component/ui/Header/Header"
import { QuestionSetCard } from "../component/QuestionSetCard"
import { useEffect, useState } from "react"


async function  fetchViewQuestionSets(){
    console.log("fetchViewQuestionSets triggered,,");

    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/read-exam-set`,{
            
                method:"GET",
                headers:{
                        'Content-Type': 'application/json'
                }
            } )

            const data = await response.json()
            console.log("data",data.data);
            return data
}

const QuestionMenuPage = () => {
    const [menuList,setMenuList]= useState([]);
    const [error,setError]= useState(null);


    useEffect(()=>{
       
            const loadData = async()=>{
                try{
                
                //check if data alrdy in cache, if not call API
                const cachedData = sessionStorage.getItem("questionSetsMenu");

                if(cachedData){
                    setMenuList(JSON.parse(cachedData))
                }else{
                    const fetchResponse =  await fetchViewQuestionSets();
                    sessionStorage.setItem("questionSetsMenu",JSON.stringify(fetchResponse.data))
                    setMenuList(fetchResponse.data);
                    console.log(fetchResponse.data);
                }
                }catch(error){
                    console.log("Error at QuestionMenuPage useEffect:",error)
                    setError("Failed fetching menu Data")
                }
            }
        loadData();
    },[])


    return (
        
        <section className=" bg-gray-100 flex flex-col gap-5">
        <Header/>

            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Pick an Exam Set </h1>
                    <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
                  
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        menuList.map((items, key) => (
                            <QuestionSetCard
                            examination_id={items.examination_id}
                            image={`${import.meta.env.VITE_API_URL}/assets${items.img_path}`}
                            subject = {items.subject}
                            questionSet={items.title}
                            desc = {items.description}
                            key={key}
                            year={items.year}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>

       
       
    )
}

export default QuestionMenuPage;