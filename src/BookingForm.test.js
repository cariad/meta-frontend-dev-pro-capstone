import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';

const today = new Date().toISOString().substring(0,10);

describe("Booking Form", () => {
  test('Renders the reservation button', () => {
    render(<BookingForm />);
    const button = screen.getByText("Reserve this table");
    expect(button).toBeInTheDocument();
  });

  test('Can reserve a table', async () => {
    const mockSubmit = jest.fn();

    render(<BookingForm
      date={today}
      guests={2}
      submitForm={mockSubmit}
    />);

    const submitButton = screen.getByText('Reserve this table');
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
  });

  test('Cannot reserve a table in the past', async () => {
    const hasErrors = jest.fn();

    render(<BookingForm
      date='2001-01-01'
      guests={2}
      hasErrors={hasErrors}
    />);

    const submitButton = screen.getByText('Reserve this table');
    fireEvent.click(submitButton);

    await waitFor(() => expect(hasErrors).toHaveBeenCalled());
  });

  test('Cannot reserve a table for undefined guests', async () => {
    const hasErrors = jest.fn();

    render(<BookingForm
      date={today}
      guests={undefined}
      hasErrors={hasErrors}
    />);

    const submitButton = screen.getByText('Reserve this table');
    fireEvent.click(submitButton);

    await waitFor(() => expect(hasErrors).toHaveBeenCalled());
  });

  test('Cannot reserve a table for zero guests', async () => {
    const hasErrors = jest.fn();

    render(<BookingForm
      date={today}
      guests={0}
      hasErrors={hasErrors}
    />);

    const submitButton = screen.getByText('Reserve this table');
    fireEvent.click(submitButton);

    await waitFor(() => expect(hasErrors).toHaveBeenCalled());
  });

  test('Cannot reserve a table for eleven guests', async () => {
    const hasErrors = jest.fn();

    render(<BookingForm
      date={today}
      guests={11}
      hasErrors={hasErrors}
    />);

    const submitButton = screen.getByText('Reserve this table');
    fireEvent.click(submitButton);

    await waitFor(() => expect(hasErrors).toHaveBeenCalled());
  });
});
