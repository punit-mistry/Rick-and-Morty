import React from "react";
import Board from "./components/Board";

function Chall2() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl mb-4">Trello Management</h1>
        <Board />
      </div>
    </div>
  );
}

export default Chall2;
