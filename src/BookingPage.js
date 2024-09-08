import BookingForm from './BookingForm';
import './BookingPage.css'

function BookingPage() {
  return (
    <div className='booking-page row'>
      <div className='
          offset-1
          offset-md-2
          offset-xl-3
      '>
        <h1>Reserve a Table</h1>
      </div>

      <BookingForm />
    </div>
  );
}

export default BookingPage;
