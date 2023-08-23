import React from "react";

const Lane = ({ title, children }) => {
  return (
    <div className="flex-1 p-4 bg-gray-200 rounded shadow mx-2">
      <h2 className="text-lg mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Lane;
