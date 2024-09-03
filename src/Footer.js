import Contact from './Contact';
import Menu from './Menu';
import SocialMedia from './SocialMedia';
import logo from './images/vertical-dark-logo.png';

function Footer() {
  return (
    <footer>
      <img
        alt='Little Lemon'
        height={174}
        src={logo}
        width={105}
      />

      <Menu />
      <Contact />
      <SocialMedia />
    </footer>
  );
}

export default Footer;
