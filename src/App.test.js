import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const homepageElement = screen.getByText('Homepage');
  expect(homepageElement).toBeInTheDocument();
});
