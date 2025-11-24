 //digital clock with resume-pause feature
 import React, { useState, useEffect } from "react";
//setcTime to update clock every second
//new Date().toLocaleTimeString() is a js function returns the current time formatted according to the user's locale (e.g., 10:45:01 PM).
export default function UseEffectTimer() {
  const [cTime, setcTime] = useState(new Date().toLocaleTimeString());//giving device current time to cTime
  const [isRunning, setIsRunning] = useState(true);//initially clock is ticking that why used true here
//This state determines whether the clock is running or paused.
//true means the timer should be ticking; false means it's paused.
//setIsRunning toggles this state when the pause/resume button is clicked.
  useEffect(() => {//Called after the component is mounted and every time isRunning changes.
    if (!isRunning) return;//If the clock is paused so this whole function will not return anything no setinterval also
//Starts a timer (setInterval=setInterval(...) is a built-in JavaScript function.
//It tells the browser:) that updates the cTime state every second (1000 ms).
    const interval = setInterval(() => {
      setcTime(new Date().toLocaleString());//update time
    }, 1000);
   return () => clearInterval(interval); //also stop interval timer we created with setInterval
   //it clears the interval timer when:the component unmounts(app shutdown) or isRunning changes and also Makes sure only one timer is active at any moment
  }, [isRunning]);//Dependency array: the effect only re-runs when isRunning changes.

  return (
    <div className="App">
      <h1>{cTime}</h1>
      {/*Button text updates to "Pause" or "Resume" depending on current state. 
      and //React gives you the current state value as prev. 
      // also prev is just refer to previous value it is not a built in, it name could be anything*/}
     <button onClick={() => setIsRunning((prev) => !prev)}>{/*It takes the previous value of isRunning.If it was true, it sets it to false.If it was false, it sets it to true */}
        {isRunning ? "Pause" : "Resume"}
      </button>
      
    </div>
  );
}
//setisRunning is defining irrunning state if isrunninng is true hit pause else resume