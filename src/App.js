import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timeStart = setInterval(() => {
      // 시작하는 코드
      setTime(parseInt(time) - 1);
    }, 1000);

    if (parseInt(time) === 0) {
      // 멈추는 코드
      clearInterval(timeStart);
    }
    return () => {
      clearInterval(timeStart);
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
      <button onClick={() => setTime(1800)}>30분</button>
      <button onClick={onTimer}>완료</button>
      <div className="timerContainer">
        <div className="timer"></div>
        <div className="graph"></div>
        <div className="centerCircle"></div>
      </div>
    </div>
  );
}

export default App;
