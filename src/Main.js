import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
