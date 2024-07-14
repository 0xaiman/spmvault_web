import { useStopwatch, useTimer } from 'react-timer-hook';


function questionAttemptTimer(handleSubmitAttempt){
    const time = new Date();
// timer feature

const timerEnd = time.setSeconds(time.getSeconds() + 3600); //TODO: Timer set at hardcoded value

const {
  seconds: timerSeconds,
  minutes: timerMinutes,
} = useTimer({ expiryTimestamp: timerEnd, onExpire: () => {
      alert('Uh Oh, you have used up the allocated time, ending current attempt')
      handleSubmitAttempt()
    } });
//TODO :refactor this Page, its a mess bro 

// 

// Stopwatch feature from react-timer-hook
const {
  seconds,
  minutes,
  hours,
} = useStopwatch({ autoStart: true });




}

export default questionAttemptTimer;
