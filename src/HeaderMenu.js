import { Link } from "react-router-dom";
import './HeaderMenu.css';

function HeaderMenu() {
  return (
    <nav className='
      col-md-8
      col-lg-6
      col-xl-5
    '>
      <ul>
        <li><Link to="/" className="primary-link-text">Home</Link></li>
        <li><a className='primary-link-text' href='.'>About</a></li>
        <li><a className='primary-link-text' href='.'>Menu</a></li>
        <li><Link to="/booking" className="primary-link-text">Reservations</Link></li>
        <li><a className='primary-link-text' href='.'>Order Online</a></li>
        <li><a className='primary-link-text' href='.'>Login</a></li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
