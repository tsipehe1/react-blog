import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('sould render the button with the text "Load more"', () => {
    const fn = jest.fn(); //mock a function

    render(<Button text="Load more" onClick={fn} />);
    expect.assertions(1); // para ter a certeza em test async que a asserçao "expect" occorreu

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeInTheDocument();
  });

  it('sould call function on button click', () => {
    const fn = jest.fn(); //mock a function

    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('sould be disabled when disabled is true', () => {
    const fn = jest.fn(); //mock a function

    render(<Button text="Load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    expect(button).toBeDisabled();
  });

  it('sould be enabled when disabled is false', () => {
    const fn = jest.fn(); //mock a function

    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    expect(button).toBeEnabled();
  });

  it('sould should match snapshot', () => {
    const fn = jest.fn(); //mock a function

    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
