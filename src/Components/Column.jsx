// Column.js
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const Column = ({ column, cards }) => {
  return (
    <div>
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
