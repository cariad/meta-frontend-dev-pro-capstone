import './Special.css';

import bike from './images/bike.png';

function Special(props) {
  return (
    <section className='special'>
      <div className='card'>

        <img
          alt={props.name}
          className='card-img-top'
          src={props.image}
        />

        <article className='card-body'>
          <p className='special-price'>{props.price}</p>
          <h1 className='card-title'>{props.name}</h1>
          <p className='card-text'>{props.description}</p>

          <p className='card-text special-delivery'>
            Order a delivery
            <img
              alt='Bicycle'
              src={bike}
              width={20}
            />
          </p>

        </article>
      </div>
    </section>
  );
}

export default Special;
