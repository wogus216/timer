import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timeStart = setInterval(() => {
      // 시작하는 코드
      setTime(parseInt(time) - 1);
    }, 1000);
    const timeCheck = setInterval(() => {
      // 시작하는 코드
      setPercent(parseInt(percent) + 25);
    }, 60000);

    console.log('percent==>', percent);

    if (parseInt(time) === 0) {
      // 멈추는 코드
      clearInterval(timeStart);
      clearInterval(timeCheck);
    }

    return () => {
      clearInterval(timeStart);
      clearInterval(timeCheck);
    };
  }, [time]);

  const onChange = (e) => {
    console.log('입력', e.target.value);
  };

  const onTimer = (e) => {
    console.log('event==>', e.target.value);
    setTime(e.target.value);
  };
  return (
    <div className="App">
      <h1>내가 필요해서 만드는 타이머</h1>
      <div>{time}</div>
      <div>시간설정</div>
      <button onClick={() => setTime(1500)}>25분</button>
      <button onClick={onTimer}>완료</button>
      <div className="timerContainer">
        <div className="timer"></div>
        <div style={{ background: `conic-gradient(#f44 0% ${percent}%, #f2f2f2 100% 100%)` }} className="graph"></div>
        <div className="centerCircle"></div>
      </div>
    </div>
  );
}

export default App;
