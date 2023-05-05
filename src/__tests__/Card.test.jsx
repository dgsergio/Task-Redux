import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  beforeEach(() => {
    render(
      <Card
        title="The title"
        description="The description The Description The Description The Description The Description The description The Description The Description The Description The Description"
        date="May 00, 0000"
      />
    );
  });

  it('should render heading title, a dresciption and a date', () => {
    const titleEl = screen.getByRole('heading', { level: 3 });
    const descrEl = screen.getByText(/the description the/i);
    const dateEl = screen.getByText(/May 00, 0000/i);
    expect(titleEl, descrEl, dateEl).toBeInTheDocument();
  });

  it('should render an icon image', () => {
    const iconEl = screen.getByRole('img');
    expect(iconEl).toBeInTheDocument();
  });

  it('should render a short description', () => {
    render(
      <Card
        title="The title"
        description="something different"
        date="May 00, 0000"
      />
    );
    const descrShortEl = screen.getByText(/something different/i);
    expect(descrShortEl).toBeInTheDocument();
  });
});
