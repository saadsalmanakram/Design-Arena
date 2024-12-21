import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-white font-sans">
      <header className="flex flex-col items-center gap-4 py-10">
        <div className="flex justify-center gap-10">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="w-20 h-20 transform hover:scale-110 transition duration-300"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="w-20 h-20 transform hover:scale-110 transition duration-300"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
          Vite + React
        </h1>
      </header>

      <main className="flex flex-col items-center gap-6 px-4">
        <div className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-400">
            Edit <code className="bg-gray-700 rounded px-1">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-gray-300 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

export default App;
