import {  useNavigate } from "react-router-dom"


export const QuestionSetCard = (props) => {
const navigate = useNavigate();

 // Destructure props
 const { examination_id, image, questionSet, subject, year, desc } = props;


const handleClick = ()=>{
  // alert(`${props.subject} clicked!`)
  navigate(`/examination-set/${props.examination_id}`,{
    state:{
        examination_id,
        image,
        questionSet,
        subject,
        year,
        desc
      }
    })
}


  return (
    <li onClick={handleClick} className=" cursor-pointer w-full mx-auto group bg-white shadow rounded-lg sm:max-w-sm" key={props.key}>
        <div>
            <img src={props.image} loading="lazy" alt={props.questionSet} className="w-max rounded-lg" />
                <div className="mt-3 space-y-2 p-4">
                            <span className="block text-indigo-600 text-sm">{props.year}</span>
                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                           {props.subject} | {props.questionSet}
                        </h3>
                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{props.desc}</p>
                </div>
            </div>
    </li>
  )
                                
}
