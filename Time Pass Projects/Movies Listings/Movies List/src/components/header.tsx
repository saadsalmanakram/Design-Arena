import reactLogo from "../assets/react.svg";  
import viteLogo from "/vite.svg";   

const Header = () => {
  return (
    <section>
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

