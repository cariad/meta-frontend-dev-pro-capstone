import HomePage from './HomePage';
import StartBookingPage from './StartBookingPage';
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<StartBookingPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
