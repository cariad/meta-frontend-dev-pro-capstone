import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

// API provided by Meta:

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};

// End of API provided by Meta.

export const initializeTimes = () => fetchAPI(new Date());
export const reduceAvailableTimes = (state, action) => fetchAPI(new Date(Date.parse(action)));

function Main() {
  const navigate = useNavigate();

  const [availableTimes, updateAvailableTimes] = useReducer(
    reduceAvailableTimes,
    initializeTimes(),
  );

  const today = new Date().toISOString().substring(0,10);

  const [date, setDate] = useState(today);
  const [guests, setGuests] = useState(2);

  const submitForm = formData => {
    submitAPI(formData);
    navigate('/confirmed-booking');
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          element={<BookingPage
            availableTimes={availableTimes}
            date={date}
            guests={guests}
            setDate={setDate}
            setGuests={setGuests}
            submitForm={submitForm}
            updateAvailableTimes={updateAvailableTimes}
          />}
          path="/booking"
        />

        <Route
          element={<ConfirmedBooking />}
          path="/confirmed-booking"
        />

      </Routes>
    </main>
  );
}

export default Main;
