import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the reservation button', () => {
    render(<BookingForm />);
    const button = screen.getByText("Reserve this table");
    expect(button).toBeInTheDocument();
})
