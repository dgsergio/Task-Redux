import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the title', () => {
  render(<App />);
  const titleEl = screen.getByRole('heading');
  expect(titleEl).toBeInTheDocument();
});
