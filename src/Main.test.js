import { reduceAvailableTimes } from './Main';

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
