import { Link } from "react-router-dom";
import './Hero.css'
import logo from './images/restaurant_chef_b.jpg';

function Hero() {
  return (
    <section
      className='row'
      id='hero'
    >
      <article className='
        col-10   offset-1
        col-md-5
        col-lg-4 offset-lg-2
      '>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className='lead'>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <p>
          <Link
            className='btn btn-primary'
            role='button'
            to="/booking"
          >
            Reserve a Table
          </Link>
        </p>
      </article>

      <aside
        className='
          col-md-6
          col-lg-4
        '
        id='hero-image-container'
      >
        <img
          alt='Chef'
          height={1285 / 4}
          src={logo}
          width={845 / 4}
        />
      </aside>
    </section>
  );
}

export default Hero;
