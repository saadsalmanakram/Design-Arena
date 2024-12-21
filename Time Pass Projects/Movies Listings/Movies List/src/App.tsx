import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-white font-sans">
      <header className="flex flex-col items-center gap-4 py-10">
        <div className="flex justify-center">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="w-20 h-20 animate-heartbeat transform transition duration-300"
              alt="Vite logo"
            />
          </a>
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
          Movies Library
        </h1>
      </header>

      <main className="flex flex-col items-center gap-6 px-4">

      </main>
    </div>
  );
}

export default App;
