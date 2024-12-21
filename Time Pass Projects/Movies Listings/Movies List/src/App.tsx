import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition effect when the component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay before applying the loaded state for smooth transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-white font-sans ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ease-in-out`}
    >
      <header className="flex flex-col items-center gap-4 py-2.5">
        <div className="flex justify-center">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="w-20 h-20 animate-heartbeat transform transition duration-300"
              alt="Vite logo"
            />
          </a>
        </div>
        <h1 className="lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
          Movies Library
        </h1>
      </header>

      <main className="flex flex-col items-center gap-6 px-4">
        
      </main>
    </div>
  );
}

export default App;
