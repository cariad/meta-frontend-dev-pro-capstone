import { useState } from 'react';

function BookingForm({availableTimes}) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [date, setDate] = useState(tomorrow.toISOString().substring(0,10))
  const [guests, setGuests] = useState(2)
  const [occasion, setOccasion] = useState()
  const [time, setTime] = useState('17:00')

  const onSubmit = e => {
    e.preventDefault();
    console.log('Submitted.');
  }

  return (
    <form
      className='
        row
        offset-1    col-10
        offset-md-2 col-md-8
        offset-xl-3 col-xl-6
      '
      onSubmit={onSubmit}
    >

      <label htmlFor="res-date">
          Date <span className='required'>*</span>
      </label>

      <input
        id="res-date"
        onChange={e => setDate(e.target.value)}
        type="date"
        value={date}
      />

      <label htmlFor="res-time">
        Time <span className='required'>*</span>
      </label>

      <select
        id="res-time"
        onChange={e => setTime(e.target.value)}
        value={time}
      >
        {
          availableTimes.map(time =><option key={time}>{time}</option>)
        }
      </select>

      <label htmlFor="guests">
        Number of guests <span className='required'>*</span>
      </label>

      <input
        id="guests"
        max="10"
        min="1"
        onChange={e => setGuests(e.target.value)}
        placeholder="1"
        type="number"
        value={guests}
      />

      <label htmlFor="occasion">Occasion</label>

      <select
        id="occasion"
        onChange={e => setOccasion(e.target.value)}
        value={occasion}
      >
        <option></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Reserve this table"
      />

    </form>
  );
}

export default BookingForm;
