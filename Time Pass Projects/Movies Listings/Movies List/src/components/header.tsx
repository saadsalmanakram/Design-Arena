import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";  // Adjust the path for reactLogo
import viteLogo from "/vite.svg";  // Vite logo path remains the same

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition effect when the component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay before applying the loaded state for smooth transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-white font-sans ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ease-in-out`}
    >
      <header className="flex flex-col items-center py-2">
        <div className="flex justify-center">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className="w-20 h-20 animate-heartbeat transform transition duration-300"
              alt="Vite logo"
            />
          </a>
        </div>
        <h1 className="lg:text-4xl font-extrabold bg-clip-text text-transparent shining-gradient">
          Movies Library
        </h1>
      </header>
    </section>
  );
};

export default Header;

