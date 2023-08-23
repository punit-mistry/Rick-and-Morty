import React from "react";

const Board = () => {
  const [items, setItems] = useState(defaultItems);

  const onDrop = (dragIndex, overIndex) => {
    const nextItems = moveItems(items, dragIndex, overIndex);
    setItems(nextItems);
  };

  const context = useDraggableContext({
    onDrop,
  });

  return (
    <>
      {items.map((item, i) => {
        return (
          <DraggableItem
            context={context}
            key={item.id}
            index={i}
            item={item}
          />
        );
      })}
    </>
  );
};

export default Board;
