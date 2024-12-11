import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav>
        <a href="/">
          <img src={headerLogo}
               alt="Logo"
               width={130}
               height={29}
         />
       </a>
      </nav>
    </header>
  )
}

export default Nav