import { Wow } from "../types";
import { getRandomWow } from "../data/GETRandomWow";
import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function RandomWow() {
  const [wow, setWow] = useState<Wow | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isCached, setIsCached] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setError(false);
    try {
      const wow = await getRandomWow(
        "https://owen-wilson-wow-api.onrender.com/wows/random"
      );
      setWow(wow);
      setIsCached(true);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading || isCached}
          onClick={handleClick}
        >
          Get your wow
        </button>
        <div className="mt-2" />
        {isCached && <p>Wow come back at this time tomorrow to get a new one</p>}
        <div className="mt-2" />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong!</p>}
      {wow && <Card wow={wow} />}
    </div>
  );
}
