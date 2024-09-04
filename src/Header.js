import HeaderMenu from './HeaderMenu';
import logo from './images/horizontal-logo.png';

import './Header.css';

function Header() {
  return (
      <header className='row'>
        <div className='
          col-md-4
          offset-lg-1 col-lg-3
          offset-xl-2 col-xl-3
        '>
          <img
            alt='Little Lemon'
            height={61}
            src={logo}
            width={200}
          />
        </div>

        <HeaderMenu />
      </header>
  );
}

export default Header;
