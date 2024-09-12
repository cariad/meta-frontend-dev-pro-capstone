import Contact from './Contact';
import FooterMenu from './FooterMenu';
import SocialMedia from './SocialMedia';
import logo from './images/vertical-dark-logo.png';
import { Link } from "react-router-dom";

import './Footer.css';

function Footer() {
  return (
    <footer className='row'>
      <div className='
        col-4    offset-2
        col-md-3 offset-md-3
        col-lg-2 offset-lg-2
      '>
        <Link
          aria-label="Go to the home page"
          to="/"
        >
          <img
            alt='Little Lemon'
            height={174}
            src={logo}
            width={105}
          />
        </Link>
      </div>

      <FooterMenu />
      <Contact />
      <SocialMedia />
    </footer>
  );
}

export default Footer;
