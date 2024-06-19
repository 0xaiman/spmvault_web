import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ResultComponent = ({questionData, score, time,correct}) => {
  return (
    <div>
        <div id="top-section " className='flex justify-between gap-8     border border-gray-400 p-10 '>
                  <div id="score-container" className='flex flex-col gap-2 lg:gap-5 text-center'>
                    <h1 className=' font-semibold'>Your Score:</h1>
                    <h1 className='text-xl lg:text-3xl font-medium'>{score}%</h1>
                  </div>
                  <div id="time-container" className='flex flex-col gap-2 lg:gap-5 text-center'>
                    <h1 className=' font-semibold'>Your Time:</h1>
                    <h1 className='text-xl lg:text-3xl font-medium'>{time}</h1>
                  </div>
                        {/* <h1> {time}</h1>
                        <h1>You got {correct} questions right!</h1> */}
            </div>
            <div className='border border-gray-400 p-10'>
              <h1 className='ext-xl lg:text-3xl font-medium'>You got {correct} questions right!</h1>
            </div>
          
           
                    <div id="bottom-section">
                {/* <div className="grid grid-cols-5 gap-4 lg:w-fit mx-auto">
                    {
                        questionData.map((_,index)=>{
                            return <Link className='bg-gray-400 hover:bg-gray-500 border border-gray-300 active:shadow-lg font-medium text-center  py-2 lg:w-40  rounded-lg duration-150' key={index}>{index+1}</Link>
                        })
                    }
                
                    </div> */}
                </div>
    </div>
  )
}

ResultComponent.propTypes = {}

export default ResultComponent