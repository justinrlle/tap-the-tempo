import * as React from 'react';
import { render } from 'react-dom';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl mb-10">Tap The Beat</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Beat
      </button>
    </div>
  );
}

render(<App />, document.getElementById("app"));
