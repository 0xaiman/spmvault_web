import Header from '../component/ui/Header/Header';
import QuestionComponent from '../component/QuestionComponent';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';
import Modal from '../component/ui/Modal';
import ResultComponent from '../component/ResultComponent';

const subjectColorBg = {
  "sejarah": 'bg-orange-300',
  "bahasa_malaysia": 'bg-yellow-200',
  "bahasa_inggeris": 'bg-blue-400',
  "pendidikan_islam": 'bg-green-400',
  "matematik": 'bg-red-400',
  "pendidikan_moral": 'bg-indigo-400',
};

const subjectColorPrimary = {
  "sejarah": 'bg-orange-400',
  "bahasa_malaysia": 'bg-yellow-300',
  "bahasa_inggeris": 'bg-blue-500',
  "pendidikan_islam": 'bg-green-500',
  "matematik": 'bg-red-500',
  "pendidikan_moral": 'bg-indigo-500',
};

const subjectColorHover = {
  "sejarah": 'hover:bg-orange-400',
  "bahasa_malaysia": 'hover:bg-amber-800',
  "bahasa_inggeris": 'hover:bg-blue-400',
  "pendidikan_islam": 'hover:bg-green-400',
  "matematik": 'hover:bg-red-400',
  "pendidikan_moral": 'hover:bg-purple-400',
};

export const QuestionLayout = () => {
  const location = useLocation();
  const { examination_id, image, questionSet, subject, year, desc } = location.state; //inherited state from QuestionFrontPage
  const [questionData, setQuestionData] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [modalStatus, setModalStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answersArray, setAnswersArray] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState([]);

  // Stopwatch feature from react-timer-hook
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  // Apply color styling based on subject
  const colorThemeBg = subjectColorBg[subject];
  const colorThemePrimary = subjectColorPrimary[subject];
  const colorThemeHover = subjectColorHover[subject];

  // Fetch questions from BE
  useEffect(() => {
    async function fetchQuestions() {
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

    fetchQuestions();

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

  // Fetch result from BE
  const fetchResult = async () => {
    try {
      const username = sessionStorage.getItem("username");
      const time = sessionStorage.getItem("timeTaken");

      const responseResultFetch = await fetch(`${import.meta.env.VITE_API_URL}/fetch-attempt-result/${examination_id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          subject,
          userAnswer: answersArray,
          time: time
        })
      });

      const responseResultFetchData = await responseResultFetch.json();
      setResultData(responseResultFetchData);
      setLoading(false); // Update loading state because response received

    } catch (error) {
      console.log("ERROR fetchResult @QUestionLayout", error);
      setLoading(false);
      setError("Error loading question from Server :( Please Ensure You are Logged in");
    }
  };

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
    fetchResult();
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
