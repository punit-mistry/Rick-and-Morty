// Board.js
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const Board = ({ columns, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            cards={column.cards}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
