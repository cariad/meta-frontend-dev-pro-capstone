import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';
import { Route, Routes } from "react-router-dom";

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
  const [availableTimes, updateAvailableTimes] = useReducer(
    reduceAvailableTimes,
    initializeTimes(),
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          element={<BookingPage
            availableTimes={availableTimes}
            updateAvailableTimes={updateAvailableTimes}
          />}
          path="/booking"
        />

      </Routes>
    </main>
  );
}

export default Main;
