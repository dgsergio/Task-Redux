import { render, screen } from '@testing-library/react';
import Task from '../components/Task';
import task from '../mocks/dummy-tasks';

describe('Task component', () => {
  beforeEach(() => {
    render(<Task id={task[0].id} task={task[0]} />);
  });

  it('should render a title', () => {
    const titleEl = screen.getByRole('heading', { level: 3 });
    expect(titleEl).toBeInTheDocument();
  });

  it('should render 2 images', () => {
    const imgsEls = screen.getAllByRole('img');
    expect(imgsEls).toHaveLength(2);
  });

  it('should render a paragraph with the date April 20, 2023', () => {
    const paragraphEl = screen.getByText('April 20, 2023');
    expect(paragraphEl).toBeInTheDocument();
  });

  it('should render a button', () => {
    const btnEl = screen.getByRole('button');
    expect(btnEl).toBeInTheDocument();
  });
});
