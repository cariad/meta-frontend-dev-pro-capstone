import BookingForm from './BookingForm';
import './BookingPage.css'

function BookingPage({
  availableTimes,
  updateAvailableTimes,
}) {
  return (
    <div className='booking-page row'>
      <div className='
          offset-1    col-11
          offset-md-2 col-md-8
          offset-xl-3 col-xl-6
      '>
        <h1>Reserve a Table</h1>
      </div>

      <BookingForm
        availableTimes={availableTimes}
        updateAvailableTimes={updateAvailableTimes}
      />

    </div>
  );
}

export default BookingPage;
