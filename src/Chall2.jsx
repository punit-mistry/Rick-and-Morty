import React from "react";
import Board from "./components/Board";

function Chall2() {
  const columns = [
    {
      id: "to-do",
      title: "To Do",
      cards: [{ id: "card-1", content: "Task 1" } /* ... */],
    },
    // Other columns...
  ];
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If there's no destination, return (dropped outside the list)
    if (!destination) {
      return;
    }

    // If the card was dropped back into the same position, return
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Clone the source column and the card being dragged
    const sourceColumn = {
      ...columns.find((col) => col.id === source.droppableId),
    };
    const draggedCard = sourceColumn.cards[source.index];

    // Remove the card from the source column
    sourceColumn.cards.splice(source.index, 1);

    // Clone the destination column
    const destinationColumn = {
      ...columns.find((col) => col.id === destination.droppableId),
    };

    // Insert the card into the destination column at the specified index
    destinationColumn.cards.splice(destination.index, 0, draggedCard);

    // Update the columns in the state
    setColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((col) => {
        if (col.id === sourceColumn.id) {
          return sourceColumn;
        } else if (col.id === destinationColumn.id) {
          return destinationColumn;
        } else {
          return col;
        }
      });

      return updatedColumns;
    });
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl mb-4">Trello Management</h1>
        {/* <Board
          columns={columns}
          onDragEnd={onDragEnd}
        /> */}
      </div>
    </div>
  );
}

export default Chall2;
