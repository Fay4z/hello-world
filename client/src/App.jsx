import { useState } from "react";

function App() {

  const [randomNum, setRandomNum] = useState("");

  const handleClick = async () => {
    const response = await fetch(`https://${import.meta.env.VITE_WEB_URL}/randomNum`);
    const data = await response.json();
    console.log(data);
    setRandomNum(data);
  }

  return (
    <div className=" text-center space-y-10">
      <h1 className='text-5xl pt-10'>Hello, World</h1>

      <button 
      className="border border-gray-200 p-4 rounded-lg bg-green-400"
      onClick={handleClick}
      >
        Click Me
      </button>

      {
        randomNum && <p className="text-xl">{randomNum}</p>
      }
    </div>
  )
}

export default App
