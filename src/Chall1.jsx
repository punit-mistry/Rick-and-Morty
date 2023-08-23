import React from "react";
import CharacterList from "./Components/CharacterList";
const Chall1 = () => {
  return (
    <div className="bg-gray-900 min-h-[94vh] text-white p-6">
      <header className="text-3xl font-bold mb-4">
        Rick and Morty Characters
      </header>
      <CharacterList />
    </div>
  );
};

export default Chall1;
