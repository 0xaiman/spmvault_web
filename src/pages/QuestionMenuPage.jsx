import Header from "../component/ui/Header/Header"
import { QuestionSetCard } from "../component/QuestionSetCard"
import { useEffect, useState } from "react"
import loadData from "../api/loadData";




const QuestionMenuPage = () => {
    const [menuList,setMenuList]= useState([]); //stores all variation of examset and renders on QUestionCard
    const [error,setError]= useState(null); //error state to load error page if fails to load data


    useEffect(()=>{
        loadData(setMenuList,setError);
    },[])


    return (
        
        <section className=" h-1/2  bg-gray-100 flex flex-col gap-5">
        <Header/>

            <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Pick an Exam Set </h1>
                    <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
                  
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 mb-20">
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