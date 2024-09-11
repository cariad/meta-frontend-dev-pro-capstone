import { initializeTimes, reduceAvailableTimes } from './Main';

test('Has any initial available times', () => {
  expect(initializeTimes().length).toBeGreaterThan(0);
});

test('Reducer returns same value', () => {
  const actual = reduceAvailableTimes(undefined, '2024-01-01');

  const expectation = [
    "17:00",
    "17:30",
    "18:00",
    "20:00",
    "21:00",
    "23:30",
  ]

  expect(actual).toEqual(expectation);
});
