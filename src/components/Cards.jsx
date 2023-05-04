import React from 'react';
import Card from './Card';

export default function Cards({ tasks }) {
  return (
    <section className="cards">
      {tasks?.length === 0 && (
        <p className="message error">No tasks found matching your query</p>
      )}
      {tasks?.map((task) => (
        <Card
          key={task.id}
          date={task.date}
          title={task.title}
          description={task.description}
        />
      ))}
    </section>
  );
}
