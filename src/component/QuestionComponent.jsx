import { useEffect, useState } from "react";
import arrowLeftSVG from "../assets/nav-icon/arrow-chevron-left.svg";
import arrowRightSVG from "../assets/nav-icon/arrow-chevron-right.svg";



const QuestionComponent = (props) => {

  return (
    // <div className="bg-white shadow p-4 py-6 sm:p-6 rounded-lg w-3/4 lg:w-4/5 h-max gap-5 flex flex-col">
    <>
      <div id="question-header" className='w-full flex flex-row gap-2 justify-between py-5 '>
        <button id="previous-button" onClick={props.handlePreviousButton} className='px-4 hover:bg-gray-400 active:bg-gray-500 border border-gray-300 active:shadow-lg font-medium py-2 rounded-lg duration-150'>
          <img src={arrowLeftSVG} />
        </button>

        <div id="current-question-set-data" className='text-center'>
          <h1>{props.year} | {props.questionSet}</h1>
          <h2>{props.subject}</h2>
          <h3>{props.index + 1}/{props.questionLength}</h3>
        </div>
        <button id="next-button" onClick={props.handleNextButton} className='px-4 hover:bg-gray-400 active:bg-gray-500 border border-gray-300 active:shadow-lg font-medium py-2 rounded-lg duration-150'>
          <img src={arrowRightSVG} />
        </button>
      </div>
      <div className='flex flex-col md:flex-row gap-5'>
        <div id="question-data" className='md:w-1/2 md:text-2xl font-medium text-center md:text-left md:px-9 flex flex-col gap-3'>
          <h1>{props.index + 1}. {props.question}</h1>
          {!props.multi ? null : <ul>
            <li>{props.multi[0]}</li>
            <li>{props.multi[1]}</li>
            <li>{props.multi[2]}</li>
            <li>{props.multi[3]}</li>
          </ul>}
        </div>
        <div id="answer-data" className='md:w-1/2 flex flex-col gap-4 md:text-2xl'>

        <button
                onClick={() => props.handleAnswerBtn("A")}
                className={` ${props.answersArray[props.index] === "A" ? props.colorThemePrimary: "bg-white" } px-4 ${props.colorThemeHover}  border border-gray-300 active:shadow-lg font-medium py-2 rounded-lg duration-150 w-full`}
              >
                {props.answer[0]}
              </button>
        <button
                onClick={() => props.handleAnswerBtn("B")}
                className={` ${props.answersArray[props.index] === "B" ? props.colorThemePrimary : "bg-white" } px-4 ${props.colorThemeHover}  border border-gray-300 active:shadow-lg font-medium py-2 rounded-lg duration-150 w-full`}
              >
                {props.answer[1]}
              </button>
        <button
                onClick={() => props.handleAnswerBtn("C")}
                className={` ${props.answersArray[props.index] === "C" ? props.colorThemePrimary : "bg-white" } px-4 ${props.colorThemeHover}  border border-gray-300 active:shadow-lg font-medium py-2 rounded-lg duration-150 w-full`}
              >
                {props.answer[2]}
              </button>
        <button
                onClick={() => props.handleAnswerBtn("D")}
                className={` ${props.answersArray[props.index] === "D" ? props.colorThemePrimary : "bg-white" } px-4 ${props.colorThemeHover}  border border-gray-300 active:shadow-lg font-medium py-2 rounded-lg duration-150 w-full`}
              >
                {props.answer[3]}
              </button>
       
        </div>
       
      </div>
      <div className="w-full">
        {!props.image_path ? null : <img className="mx-auto" src={`${props.image_path}`} alt=" " style={{ width: 'auto', minHeight: '100px', maxHeight: '700px' }} />}
      </div>
    </>
  
    // </div>
  );
}

QuestionComponent.propTypes = {}

export default QuestionComponent;
