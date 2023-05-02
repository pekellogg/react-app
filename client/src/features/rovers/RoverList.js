import useRoverContext from "./useRoverContext";
import { useState } from "react";
import RoverListItem from "./RoverListItem";

import "./RoverList.css";

export default function RoverList() {
  const rovers = useRoverContext();

  const handleClick = (e) => {
    // investigate CameraButton 'wiring' to RoverList
    if (e.target.attributes.class.value === "RoverCard") {
      const roverId = e.target.attributes.roverid.value;
      setLocalRovers((prevLocalRovers) => prevLocalRovers.map((r) => {
        if (r.id.toString() === roverId) return { ...r };
        if (r.style.display === "block") {
          return { ...r, style: { display: "none" } };
        } else {
          return { ...r, style: { display: "block" } };
        }
      }));
    }
  };

  const [localRovers, setLocalRovers] =
    useState(rovers.map((r) => ({
      ...r,
      onClick: handleClick,
      style: { display: "block" }
    })
  ));

  const displayRovers = () => {
    return localRovers.map((r) => (
      <RoverListItem
        {...r}
        key={r.id}
        onClick={r.onClick}
        style={r.style}
      />
    ));
  };

  return (
    <div id="RoverList">
      { displayRovers() }
    </div>
  );
};