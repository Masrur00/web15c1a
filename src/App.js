import { DisplayScore  } from './components/DisplayScore';
import './App.css';

import { useState } from "react";


function App() {
 
  // const findOver = (val)=> {
  //     let str = "";
  //     str = Math.round(val/6)+"." + (val%6);  // 50 
  //     return str;
  // }
   
  const [tracker, setTracker] = useState({ score: 76, wicket: 2, ball: 50 });
  const [over,setOver] = useState((tracker.ball-tracker.ball%6)/6+"."+tracker.ball%6);
  const [win,setWin]   = useState(false);

  const addScore = (val) => {
    if(tracker.score === 100){
      setWin(true)      
    }
    setTracker({...tracker, score:tracker.score+val});
    
       
  }
  


  const addBall = (val) => {   
    setTracker({...tracker, ball:tracker.ball+val})          
    setOver((tracker.ball-tracker.ball%6)/6+"."+tracker.ball%6)  
  }

  const addWicket = (val) => {   
    
      setTracker({...tracker, wicket:tracker.wicket+val});
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">{tracker.score}</h1>
        </div>

        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {tracker.wicket}
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {over}
          </h1>
            {/* // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball */}
            {/* // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number. */}
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => addScore(1)}>Add 1</button>
        <button className="addScore4" onClick={() => addScore(4)}>Add 4</button>
        <button className="addScore6" onClick={() => addScore(6)}>Add 6</button>

      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button className='w_btn' onClick={() => addWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button className='b_btn' onClick={() => addBall(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}      
      {(win)?<DisplayScore className="status" />:""}
    </div>
  );
}

export default App;
