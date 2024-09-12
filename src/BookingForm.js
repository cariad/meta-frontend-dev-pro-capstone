import { useFormik } from "formik";
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

function BookingForm({
  availableTimes,
  date,
  guests,
  hasErrors,
  setDate,
  setGuests,
  submitForm,
  updateAvailableTimes,
}) {
  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);

  const { errors, getFieldProps, handleSubmit, isValid } = useFormik({
    initialValues: {
      date,
      guests,
    },
    onSubmit: () => {
      submitForm({
        'date': date,
        'guests': guests,
        'occasion': occasion,
        'time': time,
      });
    },
    validationSchema: Yup.object({
      date: Yup.date().required(
        'Please specify the date of your visit.'
      ).min(
        minDate, 'Reservations cannot be made for the past.'
      ),
      guests: Yup.number().required(
        'Please specify the number of guests.'
      ).integer().min(
        1, 'At least one guest must be present.'
      ).max(
        10, 'Please contact us to arrange a booking for more than 10 guests.'
      )
    }),
  });

  useEffect(() => {
    if (hasErrors && !isValid) hasErrors()
    }, [hasErrors, isValid])

  const [occasion, setOccasion] = useState();
  const [time, setTime] = useState('17:00');

  const onDateChange = e => {
    setDate(e.target.value);
    updateAvailableTimes(e.target.value);
  };

  return (
    <form
      className='
        row
        offset-1    col-10
        offset-md-2 col-md-8
        offset-xl-3 col-xl-6
      '
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >

      <label htmlFor="res-date">
          Date <span className='required'>*</span>
      </label>

      <input
        id="res-date"
        min={minDate.toISOString().substring(0, 10)}
        onChange={onDateChange}
        type="date"
        value={date}
        {...getFieldProps('date')}
      />
      {errors.date ? <p className='invalid' role='alert'>{errors.date}</p> : null}

      <label htmlFor="res-time">
        Time <span className='required'>*</span>
      </label>

      <select
        id="res-time"
        onChange={e => setTime(e.target.value)}
        value={time}
      >
        {
          availableTimes
            ? availableTimes.map(time => <option key={time}>{time}</option>)
            : null
        }
      </select>

      <label htmlFor="guests">
        Number of guests <span className='required'>*</span>
      </label>

      <input
        id="guests"
        onChange={e => setGuests(e.target.value)}
        placeholder="1"
        type="number"
        value={guests}
        {...getFieldProps('guests')}
      />
      {errors.guests ? <p className='invalid' role='alert'>{errors.guests}</p> : null}

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
        className='btn btn-primary'
        disabled={!isValid}
        type="submit"
        value="Reserve this table"
      />

    </form>
  );
}

export default BookingForm;
