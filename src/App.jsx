import { useState } from 'react'

import './App.css'

function App() {
  let [countOne, setCountOne] = useState(0);
  let [countTow, setCountTwo] = useState(0);
  let [result, setResult] = useState(0);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

 
  return (
    <>

<div className="p-4">
          <div
            className="bg-primary p-2 rounded-md text-primary-content w-fit"
            onClick={toggleTheme}
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </div>
        </div>

      <div className='flex flex-col bg-primary-content justify-center items-center w-screen h-screen'>
        
        <div>

          <button className='p-3 text-white ml-2 bg-gray-400  text-2xl' onClick={() => setCountOne(countOne + 1)}>+</button>

          <span className='p-3 text-white bg-slate-500 text-2xl'>{countOne}</span>

          <button className='p-3 text-white me-2 bg-gray-400  text-2xl' onClick={() => setCountOne(countOne - 1)}>-</button>


          <button className='p-3 text-white ml-2 bg-gray-400  text-2xl' onClick={() => setCountTwo(countTow + 1)}>+</button>

          <span className='p-3 text-white bg-slate-500 text-2xl'>{countTow}</span>

          <button className='p-3 text-white me-2 bg-gray-400  text-2xl' onClick={() => setCountTwo(countTow - 1)}>-</button>

        </div>


          <div className='flex m-4'>
            <button className='text-2xl bg-slate-500 ml-3 p-3' onClick={() => setResult(countOne + countTow)}>Add +</button>
            <button className='text-2xl bg-slate-500 ml-3 p-3' onClick={() => setResult(countOne - countTow)}>Sub -</button>
            <button className='text-2xl bg-slate-500 ml-3 p-3' onClick={() => setResult(countOne * countTow)}>Mult *</button>
            <button className='text-2xl bg-slate-500 ml-3 p-3' onClick={() => setResult(countOne / countTow)}>Div /</button>
            <button className='text-2xl bg-slate-500 ml-3 p-3' onClick={() => setResult(countOne / countTow)}>Remainder %</button>
          </div>

          <div>
            <h2 className='text-3xl text-white bg-slate-800 p-3'>Result = <span>{result}</span></h2>
          </div>
      </div>
    </>
  )
}

export default App
