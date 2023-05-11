import { render, screen } from '@testing-library/react';
import Cards from '../components/Cards';
import dummyTasks from '../mocks/dummy-tasks';

describe('cards component', () => {
  it('print a message when no task are found', () => {
    render(<Cards tasks={[]} />);
    const errorEl = screen.getByText(/no tasks found/i);
    expect(errorEl).toBeInTheDocument();
  });

  it('should render 3 tasks with card compenent', () => {
    render(<Cards tasks={dummyTasks} />);
    const imgCardEl = screen.getAllByRole('img');
    expect(imgCardEl).toHaveLength(3);
  });
});
