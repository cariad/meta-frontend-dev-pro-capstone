import { initializeTimes, reduceAvailableTimes } from './Main';

test('Has correct initial available times', () => {
  expect(initializeTimes()).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);
});

test('Reducer returns same value', () => {
  expect(reduceAvailableTimes('foo')).toEqual('foo');
});
