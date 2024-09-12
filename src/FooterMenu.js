import { Link } from "react-router-dom";
import './FooterMenu.css';

function FooterMenu() {
  return (
    <section className='
      col-4
      col-md-3
      col-lg-2
    '
    >
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href='.'>About</a></li>
          <li><a href='.'>Menu</a></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><a href='.'>Order Online</a></li>
          <li><a href='.'>Login</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default FooterMenu;
