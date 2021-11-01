import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

interface State {
  count: number;
  last: number;
  bpm: number;
}
function App() {

  const [start, setStart] = useState(0);
  const [state, setState] = useState<State>({count: 0, last: 0, bpm: 0})
  const [count, setCount] = useState(0);
  const [end, setEnd] = useState(0);
  const [medium, setMedium] = useState(0);

  const reset = () => {
    setState({count: 0, last: 0, bpm: 0});
    setStart(0);
  }

  const tap = () => {
    const now = Date.now()
    if (start === 0) {
      setStart(now);
    }
    const count = state.count + 1;
    const last = now;
    const timeCoef = 60 * 1000 / (last - start);
    const bpm = Math.round(state.count * timeCoef);
    setState({count, last, bpm});
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <button onClick={tap} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-12 my-2 text-2xl rounded-xl">
        Tap The Tempo
      </button>
      <p className="my-8 text-4xl">
        {state.bpm} <span className="text-sm">Beats Per Minute</span>
      </p>
      <button onClick={reset} className=" border-2 border-solid border-red-600 bg-red-100 hover:bg-red-200 text-gray-900 font-bold py-2 px-4 rounded">
        Reset
      </button>
      <ul className="m-5 text-sm">
        <li>Started at <b>{start}</b></li>
        <li>Tapped <b>{state.count}</b> times</li>
        <li>Last tap at <b>{state.last}</b></li>
        <li>BPM: <b>{state.bpm}</b></li>
      </ul>
    </div>
  );
}

render(<App />, document.getElementById("app"));
