import './HeaderMenu.css';

function HeaderMenu() {
  return (
    <nav className='
      col-md-8
      col-lg-6
      col-xl-5
    '>
      <ul>
        <li><a className='primary-link-text' href='.'>Home</a></li>
        <li><a className='primary-link-text' href='.'>About</a></li>
        <li><a className='primary-link-text' href='.'>Menu</a></li>
        <li><a className='primary-link-text' href='.'>Reservations</a></li>
        <li><a className='primary-link-text' href='.'>Order Online</a></li>
        <li><a className='primary-link-text' href='.'>Login</a></li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
