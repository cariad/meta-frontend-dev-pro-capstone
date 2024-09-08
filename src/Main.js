import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';
import { Route, Routes } from "react-router-dom";

function Main() {
  const initialTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]

  const reduceAvailableTimes = (state, action) => state;

  const [availableTimes, updateAvailableTimes] = useReducer(
    reduceAvailableTimes,
    initialTimes,
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
