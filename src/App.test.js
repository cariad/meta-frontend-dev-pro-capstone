import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const homeLinks = screen.getAllByText('Home');
  expect(homeLinks).toHaveLength(2);
});
