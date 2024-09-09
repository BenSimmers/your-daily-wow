import { Wow } from "../types";
import { getRandomWow } from "../data/GETRandomWow";
import React, { useState } from "react";
import { Card } from "./Card";

type FetchStatus = "idle" | "loading" | "error" | "success";

const RANDOM_WOW_API_URL: string  =
  "https://owen-wilson-wow-api.onrender.com/wows/random";

export const RandomWow: React.FunctionComponent = () => {
  const [wow, setWow] = useState<Wow | null>(null);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("idle");

  const handleClick = async () => {
    setFetchStatus("loading");
    try {
      const fetchedWow = await getRandomWow(RANDOM_WOW_API_URL);
      setWow(fetchedWow);
      setFetchStatus("success");
    } catch (error) {
      console.error("Failed to fetch wow:", error);
      setFetchStatus("error");
    }
  };

  return (
    <div>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={fetchStatus === "success" || wow !== null}
          onClick={handleClick}
        >
          Get your wow
        </button>
        <div className="mt-2" />
        {fetchStatus === "success" && wow && (
          <p>Wow come back at this time tomorrow to get a new one</p>
        )}
        <div className="mt-2" />
      </div>
      {wow && <Card wow={wow} />}
      {fetchStatus === "loading" && <p>Loading...</p>}
      {fetchStatus === "error" && <p>There was an error</p>}
    </div>
  );
};
