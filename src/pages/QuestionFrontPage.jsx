import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { subjectColorBg, subjectColorHover,subjectColorPrimary,ringColor } from "../utils/colorSubjectThemeUtils";

// import image1 from "../../assets/media/thumbnail/1.png"





const QuestionFrontPage =() => {
const location = useLocation();
const { examination_id, image, questionSet, subject, year,  desc} = location.state;
const navigate = useNavigate() //used for handleStartExam

 //   
const [bgColorTheme,setBgColorTheme] = useState('') ;
const [bgHoverColorTheme,setBgHoverColorTheme] = useState('') ;
const [borderHoverColorTheme,setBorderHoverColorTheme] = useState('') ;
const [ringColorTheme,setRingColorTheme] = useState('') ;



useEffect(()=>{
    setBgColorTheme(subjectColorBg[subject]);
    setBgHoverColorTheme(subjectColorPrimary[subject]);
    setBorderHoverColorTheme(subjectColorHover[subject]);
    setRingColorTheme(ringColor[subject])


    
},[bgColorTheme, bgHoverColorTheme,borderHoverColorTheme,ringColorTheme, subject]);


function handleStartExam(){
    navigate(`/examination-set/${examination_id}/question/${subject}/${year}/${questionSet}`,{
        state:{ examination_id, image, questionSet, subject, year,  desc}
    })

}


    return ( 
        <>
        <main className="w-full flex">
                <div className={`relative flex-1 hidden items-center justify-center h-screen  lg:flex`}  
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                
                </div>
            <div className="flex-1 flex items-center justify-center h-screen px-20">
                    <div className="flex flex-col justify-evenly h-1/2 gap-5">
                        <p className="text-3xl">
                            You are about to attempt <span className="uppercase font-black">{subject} {desc} {questionSet} {year}</span>. 
                            The duration for the question set is 1 Hour. Do you wish to proceed and start the Exam?
                        </p>
                        <button   
                        // to={`/exam-set/${year}/${subject}/${questionSet}/question/1`}    
                        onClick={handleStartExam}

                            className={`text-center w-full px-8 py-4 text-white   duration-100 border ${borderHoverColorTheme} ${bgColorTheme} ${bgHoverColorTheme} rounded-lg shadow-md focus:shadow-none ring-offset-2 ${ringColorTheme}  focus:ring-2 `}
                                >
                                   START THE EXAM
                        </button>
                        <Link
                            to={"/question-menu"}
                            className={` text-center w-full px-7 py-4 text-gray-700 duration-100 border rounded-lg ${borderHoverColorTheme} active:shadow-lg`}
                                >
                                    Back
                        </Link>
                    </div>
                
            </div>
        </main>

        </>
       
    )

}

export default QuestionFrontPage;
