import BookingForm from './BookingForm';
import './BookingPage.css'

function BookingPage({
  availableTimes,
  date,
  guests,
  setDate,
  setGuests,
  submitForm,
  updateAvailableTimes,
}) {
  return (
    <section className='booking-page row'>
      <div className='
          offset-1    col-11
          offset-md-2 col-md-8
          offset-xl-3 col-xl-6
      '>
        <h1>Reserve a Table</h1>
      </div>

      <BookingForm
        availableTimes={availableTimes}
        date={date}
        guests={guests}
        setDate={setDate}
        setGuests={setGuests}
        submitForm={submitForm}
        updateAvailableTimes={updateAvailableTimes}
      />

    </section>
  );
}

export default BookingPage;
