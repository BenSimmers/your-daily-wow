import React from "react";
import { Wow } from "../types";

export type CardProps = {
  wow: Wow;
};

export default function Card({ wow }: CardProps) {

  const videoStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-3 mb-10">
      <h2>{wow.movie} directed by {wow.director} </h2>
      <h2 className="text-xl font-bold leading-tight text-gray-900 mb-4">
       In {wow.movie}... Owen Wilson says {wow.full_line} at {wow.timestamp} as {wow.character} 
      </h2>
      <video controls style={videoStyle}>
        <source src={wow.video["1080p"]} type="video/mp4" style={videoStyle} />
      </video>
    </div>
  );
};
