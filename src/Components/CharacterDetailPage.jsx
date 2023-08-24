import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const CharacterDetailPage = () => {
  const params = useParams();

  const [characters, setCharacters] = useState({});
  const [noResults, setNoResults] = useState(false); // State to handle no results
  const [loading, setLoading] = useState(false); // State to handle no results

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((response) => {
        if (response.data?.error) {
          setNoResults(true); // If no results, set noResults state to true
          setLoading(false);
        } else {
          setNoResults(false); // Reset noResults state if there are results
          setCharacters(response.data);
          console.log(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setNoResults(true);
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {noResults ? (
        <div className="text-center w-full">No results found.</div>
      ) : (
        <>
          {loading ? (
            <div className="bg-blue-900 h-[94vh] flex justify-center pt-10">
              <div className="text-white font-bold text-2xl text-center flex w-[30vw] bg-blue-800 shadow-black min-h-10 max-h-96 p-5 border-2">
                <div className="w-full p-4">
                  <div className="bg-blue-200 h-4 w-1/2 animate-pulse mb-2"></div>
                  <div className="bg-blue-200 h-4 w-1/4 animate-pulse"></div>
                  <div className="bg-blue-200 h-4 w-1/3 animate-pulse my-2"></div>
                  <div className="bg-blue-200 h-4 w-1/4 animate-pulse"></div>
                  <br />
                  <button className="bg-blue-200 text-blue-200 w-32 h-10 animate-pulse rounded-lg"></button>
                </div>
                <div>
                  <div className="bg-blue-200 w-52 min-w-52 max-w-52 h-52 animate-pulse"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-blue-900 h-[94vh] flex justify-center pt-10">
              <div className="text-white font-bold text-2xl text-center flex bg-blue-800 shadow-black min-h-20 max-h-96 p-5 border-2">
                <div className="w-96 text-center flex flex-col gap-2 justify-center items-center">
                  <div>
                    <label className="text-red-600">Name: </label>
                    <span>{characters.name}</span>
                  </div>
                  <div>
                    <label className="text-red-600">Status: </label>
                    <span>{characters.status}</span>
                  </div>
                  <div>
                    <label className="text-red-600">Species: </label>
                    <span>{characters.species}</span>
                  </div>
                  <div>
                    <label className="text-red-600">Gender: </label>
                    <span>{characters.gender}</span>
                  </div>
                  <br />
                  <button className="bg-white text-black w-32 hover:bg-slate-300 h-10 rounded-lg transition-all">
                    <Link to="/">Go Back</Link>
                  </button>
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src={characters.image}
                    alt={characters.name}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CharacterDetailPage;
