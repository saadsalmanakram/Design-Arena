import { useState, useEffect } from "react";
import Header from './components/Header';  
import Movies from './components/Movies';

const App = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition effect when the component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay before applying the loaded state for smooth transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-gray-800 text-white font-sans ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ease-in-out`}>

      <div>
        <Header /> 
      </div>

      <div>
        <Movies />
      </div>

    </div>
  )
}

export default App