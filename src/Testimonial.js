import './Testimonial.css';
import star from './images/star.png';

function Testimonial(props) {
  return (
    <section className='testimonial'>
      <div className='stars'>
        <img src={star} width={25} alt='Star' />
        <img src={star} width={25} alt='Star' />
        <img src={star} width={25} alt='Star' />
        <img src={star} width={25} alt='Star' />
        <img src={star} width={25} alt='Star' />
      </div>

      <div className='reviewer'>
        <img
          alt={props.name}
          src={props.image}
        />

        <p>{props.name}</p>
      </div>

      <p>"{props.review}"</p>
    </section>
  );
}

export default Testimonial;
