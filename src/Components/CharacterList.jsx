import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ name: "", status: "", gender: "" });
  const [noResults, setNoResults] = useState(false); // State to handle no results

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character", { params: filters })
      .then((response) => {
        if (response.data.results.length === 0) {
          setNoResults(true); // If no results, set noResults state to true
        } else {
          setNoResults(false); // Reset noResults state if there are results
          setCharacters(response.data.results);
        }
      })
      .catch((error) => {
        setNoResults(true);
        console.error(error);
      });
  }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="bg-blue-900 text-black p-4 flex flex-col justify-center items-center">
      <div className="flex gap-4 mb-4 flex-wrap ">
        <input
          type="text"
          name="name"
          placeholder="Search by name"
          className="p-2 border rounded-md"
          value={filters.name}
          onChange={handleFilterChange}
        />
        <select
          name="status"
          className="p-2 border rounded-md"
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value="">Select status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          name="gender"
          className="p-2 border rounded-md"
          value={filters.gender}
          onChange={handleFilterChange}
        >
          <option value="">Select gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button
          className="bg-red-600 w-28 font-bold text-white rounded-lg hover:bg-red-700 transition-all"
          onClick={() => setFilters({ name: "", status: "", gender: "" })}
        >
          Reset
        </button>
      </div>
      <div className="flex md:flex-wrap flex-wrap justify-center items-center">
        {noResults ? (
          <div className="text-center w-full">No results found.</div>
        ) : (
          characters.map((character) => (
            <div
              key={character.id}
              className="bg-blue-500 flex flex-col  justify-between m-3 w-52 h-32 min-h-32 max-h-32 text-center  rounded-lg"
            >
              <div className="">
                <span className="font-bold">{character.name}</span>
                <br />
                <span>{character.origin.name}</span>
              </div>
              <div className="border-t-2 p-2">
                <button className="bg-green-600 text-white w-32 h-10 ">
                  Know More
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CharacterList;
