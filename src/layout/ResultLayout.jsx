import React, { useState } from 'react'
import Header from '../component/ui/Header/Header'
import { Link, useParams } from 'react-router-dom';

const questionData = [
    {
        question : "Apakah soalan awak?",
        multi : ["I. Entah", "II. Hah","III. Kenapa","IV. Yes"],
        image_path: "",
        answer:["A. I dan II","B. II dan III","C. III dan IV","D. Semua di atas"]
    },
    {
        question : "Soalan ini jenis ABC sahaja?",
        multi : [],
        image_path: "",
        answer:["A. Ya Betul","B. Ya Salah","C. Tak Betul","D. Tak Salah"]
    },
    {
        question : "Soalan ini jenis multi-choice?",
        multi : ["I. Correct", "II. Correction","III. True","IV. Truthy"],
        image_path: "",
        answer:["A. Ya Betul","B. Ya Salah","C. Tak Betul","D. Tak Salah"]
    },
    {
        question : "Soalan ini jenis ada gambar?",
        multi : [],
        image_path: `assets/2022/sejarah/klon_mrsx/question-image-sejarah-2022-mrsx-1717438455448-669972093.png`,
        answer:["A. Ya Betul","B. Ya Salah","C. Tak Betul","D. Tak Salah"]
    },
    {
        question : "Soalan ini jenis ada gambar DAN multi-choice?",
        multi : ["I. Correct", "II. Correction","III. True","IV. Truthy"],

        image_path: `assets/2022/sejarah/klon_mrsx/question-image-sejarah-2022-mrsx-1717438455448-669972093.png`,
        answer:["A. Ya Betul","B. Ya Salah","C. Tak Betul","D. Tak Salah"]
    },

]

// let colorThemeBg = localStorage.getItem("currentTheme")
const subjectColorBg = {
    "sejarah": 'bg-orange-300',
    "bahasa-malaysia": 'bg-yellow-200',
    "bahasa-inggeris": 'bg-blue-400',
    "pendidikan-islam": 'bg-green-400',
    "matematik": 'bg-red-400',
  };

export const ResultLayout = () => {
    let {year,subject,questionSet} = useParams();
    let [submitAnswer, setSubmitAnswer]= useState(false);

    function handleSubmit(){
        setSubmitAnswer(true);
    }

    let colorThemeBg = subjectColorBg[subject]

    const userAnswer = localStorage.getItem(`user-answer-${year}-${subject}-${questionSet}`)
    console.log(userAnswer)


  return (
   
    <div className=" w-full min-h-screen flex flex-col ">
    <Header/>
    <div id="content" className={` flex-grow flex flex-col items-center justify-center ${colorThemeBg} sm:px-4  `}>

        {/* /result componnet begin */}
        <div className="bg-white  shadow p-4 py-6 sm:p-6 rounded-lg w-5/6  lg:w-fit flex flex-col gap-5 my-5 ">
                {
                submitAnswer ? 
                <div id="top-section " className='flex justify-between lg:text-3xl my-2 font-medium px-10 '>
                    <h1>80%</h1>
                    <h1> 50 minutes</h1>
                    <h1>You got 32 questions right!</h1>
                </div>
                    :               
                   <div id="top-section " className='text-center lg:text-3xl my-2 font-medium '>
                            <h1>You have have reached the end of the question set.</h1>
                            <h1> Please ensure you have answered all question.</h1>
                    </div>
                                        
                }
            
            <div id="bottom-section">
                <div className="grid grid-cols-5 gap-4 lg:w-fit mx-auto">
                {
                    questionData.map((_,index)=>{
                        return <Link className='bg-gray-400 hover:bg-gray-500 border border-gray-300 active:shadow-lg font-medium text-center  py-2 lg:w-40  rounded-lg duration-150' key={index}>{index+1}</Link>
                    })
                }
                
                </div>
            </div>
            <div className='flex justify-center'>

            {
                submitAnswer ? 
                <div className='flex flex-col gap-2 w-full'>
                     <button onClick={handleSubmit} className='bg-blue-500 text-white  hover:bg-blue-400 border border-gray-300 active:shadow-lg font-medium text-center  py-2 w-full  rounded-lg duration-150'>Go to Profile</button>
                    <button onClick={handleSubmit} className='bg-gray-500 text-white  hover:bg-gray-400 border border-gray-300 active:shadow-lg font-medium text-center  py-2 w-full  rounded-lg duration-150'>Retake this Question Set</button>

                
                </div>
                    :               
                    <button onClick={handleSubmit} className='bg-green-500 text-white  hover:bg-green-400 border border-gray-300 active:shadow-lg font-medium text-center  py-2 w-full  rounded-lg duration-150'>SUBMIT</button>

                                        
                }
            </div>
        
        </div>


        {/* result component end */}
       
      
    </div>


    </div>
  )
}
