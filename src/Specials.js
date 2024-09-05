import './Specials.css';

import bruschetta from './images/bruschetta.jpg'
import dessert from './images/lemon_dessert.jpg'
import salad from './images/greek_salad.jpg';

import Special from './Special';

function Specials() {
  return (
    <section
      className='row'
      id='specials'
    >
      <div
        className='
          offset-1 col-10
          offset-xxl-2 col-xxl-8
        '
      >
        <h1>Specials</h1>
      </div>

      <div
        className='
          cards row
          offset-1     col-10
          offset-xxl-2 col-xxl-8'
      >
        <Special
          description='The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic croutons.'
          image={salad}
          name='Greek Salad'
          price='$12.99'
        />

        <Special
          description='Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
          image={bruschetta}
          name='Bruschetta'
          price='$5.99'
        />

        <Special
          description="This comes straight from grandma's recipe book. Every last ingredient has been authentically, locally sourced."
          image={dessert}
          name='Lemon Dessert'
          price='$5.00'
        />
      </div>
    </section>
  );
}

export default Specials;
