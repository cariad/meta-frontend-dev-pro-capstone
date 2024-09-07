import './About.css';

import owners_a from './images/owners_a.jpg';
import owners_b from './images/owners_b.jpg';

function About() {
  return (
    <div
      className='row'
      id='about'
    >
      <article className='
        col-10   offset-1
        col-md-5
        col-lg-4 offset-lg-2
      '>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className='lead'>
          After travelling across Europe and falling in love with authentic,
          locally-sourced food, Chicago's own Mario and Adrian returned home and
          founded Little Lemon on the block where they grew up.
        </p>
        <p className='lead'>
          The restaurant opened in 2014 thanks to the hard-work and investment
          of their families, and it remains family-owned and family-run today.
        </p>
      </article>

      <div
        className='
          col-8   offset-3
          col-md-6 offset-md-0
          col-lg-4 offset-lg-1
          col-xxl-3
        '

        id='about-images-container'
      >
        <img
          alt='Mario and Adrian'
          height={1000 / 4}
          src={owners_a}
          width={800 / 4}
        />
        <img
          alt='Mario and Adrian'
          height={1000 / 4}
          src={owners_b}
          width={800 / 4}
        />
      </div>
    </div>
  );
}

export default About;
