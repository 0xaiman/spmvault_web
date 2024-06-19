import { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';


export const TimerCountdown = () => {
   
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



  return (
    <div>
            <h1 className='font-bold text-2xl my-5'>
                0{hours}:{minutes<10 ? `0${minutes}` :minutes}:{seconds<10 ? `0${seconds}` :seconds}
            </h1>
            {/* <h1>total seconds :{totalSeconds}</h1> */}

    </div>
  )
}
