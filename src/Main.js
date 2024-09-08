import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";

function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ])

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          element={<BookingPage
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
          />}
          path="/booking"
        />

      </Routes>
    </main>
  );
}

export default Main;
