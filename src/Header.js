import HeaderMenu from './HeaderMenu';
import logo from './images/horizontal-logo.png';

function Header() {
  return (
    <header>
      <img
        alt='Little Lemon'
        height={61}
        src={logo}
        width={200}
      />

      <HeaderMenu />
    </header>
  );
}

export default Header;
