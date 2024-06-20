import Header from '../component/ui/Header/Header';
import QuestionComponent from '../component/QuestionComponent';
import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';
import Modal from '../component/ui/Modal';
import ResultComponent from '../component/ResultComponent';
import { subjectColorBg,subjectColorHover,subjectColorPrimary } from '../utils/colorSubjectThemeUtils';
import { fetchQuestions } from '../api/fetchQuestions';
import { fetchResult } from '../api/fetchResult';


export const QuestionLayout = () => {
  const location = useLocation();
  const { examination_id, questionSet, subject, year } = location.state; //inherited state from QuestionFrontPage
  const [questionData, setQuestionData] = useState([]);
  const [index, setIndex] = useState(0);
  const [modalStatus, setModalStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answersArray, setAnswersArray] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState([]);

  // Stopwatch feature from react-timer-hook
  const {
    seconds,
    minutes,
    hours,
  } = useStopwatch({ autoStart: true });

  // Apply color styling based on subject
  const colorThemeBg = subjectColorBg[subject];
  const colorThemePrimary = subjectColorPrimary[subject];
  const colorThemeHover = subjectColorHover[subject];

  // Fetch questions from BE
  useEffect(() => {
    fetchQuestions(subject,year,examination_id,setQuestionData,setLoading,setError);
  }, [year, subject, questionSet, examination_id,questionData]);

  // Handle previous and next button functions
  function handlePreviousButton() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      alert("Error : Reached limit for index range");
    }
  }

  function handleNextButton() {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
    } else {
      setModalStatus(true);
    }
  }

  // Handle user answer choice
  function handleAnswerBtn(answerInput) {
    const newAnswers = [...answersArray];
    newAnswers[index] = answerInput;
    setAnswersArray(newAnswers);
    console.log(newAnswers);
  }

  // Handle modal button submit user answer
  function handleSubmitAttempt() {
    setShowResult(true);
    const time_snapshot = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    const cacheTime = sessionStorage.getItem("timeTaken");
    if (cacheTime) {
      sessionStorage.removeItem('timeTaken');
      sessionStorage.setItem('timeTaken', time_snapshot);
    } else {
      sessionStorage.setItem('timeTaken', time_snapshot);
    }
    fetchResult(examination_id,subject,answersArray,setResultData,setLoading,setError);
  }

  // Render UI handling if fetch fails
  if (loading) return <p className='h-screen w-screen text-center text-4xl font-bold flex flex-col justify-center'>Loading...</p>;
  //render Error Page if QUestions faile=s to fetch
  if (!questionData || questionData.length === 0 || error) return (
    <div className='h-screen'>
      <Header />
      <div className='h-1/2 w-screen text-center text-4xl font-bold flex flex-col justify-center'>
        {error ? (
          <>
            <p>{error}</p>
            <p>Please ensure you are logged in</p>
          </>
        ) : (
          <>
            <p>Questions set is <span className="text-indigo-600">unavailable</span>.</p>
            <p>Please Check back Later.</p>
          </>
        )}
      </div>
    </div>
  );

  return (

        <div className={`w-full min-h-screen flex flex-col ${colorThemeBg}`}>
            {modalStatus &&
              <Modal
                open={modalStatus}
                onClose={() => setModalStatus(false)}
                handleSubmitAttempt={handleSubmitAttempt}
              />
            }
            <Header />
            <div id="content" className={`flex flex-col items-center justify-center sm:px-4 h-fit`}>
              <h1>{questionData.questionData}</h1>
              <h1 className='font-bold text-2xl my-5'>
                {
                  showResult ?
                    null :
                    `0${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                }
              </h1>
              <div className={`bg-white shadow p-4 py-6 sm:p-6 rounded-lg ${showResult ? "w-4/5 lg:w-fit" : "w-4/5 lg:w-3/4"} h-max gap-5 flex flex-col`}>
                {showResult ?
                  <ResultComponent
                    questionData={questionData}
                    score={resultData.score}
                    correct={resultData.correct}
                    time={resultData.time_taken}
                  />
                  :
                  <QuestionComponent
                    index={index}
                    examination_id={examination_id}
                    questionLength={questionData.length}
                    question={questionData[index].question_text}
                    multi={questionData[index].multi_choice}
                    image_path={questionData[index].path}
                    answer={questionData[index].answer_options}
                    handlePreviousButton={handlePreviousButton}
                    handleNextButton={handleNextButton}
                    handleAnswerBtn={handleAnswerBtn}
                    answersArray={answersArray}
                    colorThemeBg={colorThemeBg}
                    colorThemePrimary={colorThemePrimary}
                    colorThemeHover={colorThemeHover}
                    subject={subject}
                    year={year}
                    questionSet={questionSet}
                  />
                }
              </div>
            </div>
          </div>
  );
};
