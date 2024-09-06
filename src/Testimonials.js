import './Testimonials.css';
import Testimonial from './Testimonial';
import alice from './images/alice.jpg';
import bob from './images/bob.jpg';
import charlie from './images/charlie.jpg';
import dave from './images/dave.jpg';

function Testimonials() {
  return (
    <section
      className='row'
      id='testimonials'
    >
      <div
        className='
          offset-1 col-10
          offset-xxl-2 col-xxl-8
        '
      >
        <h1>Testimonials</h1>
      </div>

      <div
        className='
          cards row
          offset-1     col-10
          offset-xxl-2 col-xxl-8'
      >
        <Testimonial
          image={alice}
          name='Alice'
          review='Grilled to perfection!'
        />

        <Testimonial
          image={bob}
          name='Bob'
          review="I've had all my weddings here!"
        />

        <Testimonial
          image={charlie}
          name='Charlie'
          review='Best bruschetta in the city!'
        />

        <Testimonial
          image={dave}
          name='Dave'
          review='The staff are incredible!'
        />
      </div>
    </section>
  );
}

export default Testimonials;
