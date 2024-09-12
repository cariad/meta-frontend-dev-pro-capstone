import HeaderMenu from './HeaderMenu';
import logo from './images/horizontal-logo.png';
import { Link } from "react-router-dom";

import './Header.css';

function Header() {
  return (
      <header className='row'>
        <div className='
          col-md-4
          offset-lg-1 col-lg-3
          offset-xl-2 col-xl-3
        '>
          <Link
            aria-label="Go to the home page"
            to="/"
          >
            <img
              alt='Little Lemon'
              height={61}
              src={logo}
              width={200}
            />
          </Link>
        </div>

        <HeaderMenu />
      </header>
  );
}

export default Header;
