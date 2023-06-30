import React from "react";
import FetchResource from "../../common/FetchResource";
import RoverListItem from "./RoverListItem";

import "./RoverList.css";

export default function RoverList() {
  const rovers = FetchResource("/api/v1/rovers");

  if (rovers.isLoading) return <h1>Loading...</h1>;

  if (rovers.isError) return <pre>{JSON.stringify(rovers.error)}</pre>;

  function displayRovers() {
    return rovers.data.map((r) => (
      <RoverListItem
        {...r}
        key={r.id}
        style={{ display: "block" }}
      />
    ));
  }

  if (rovers.data) return <div id="RoverList">{displayRovers()}</div>;
}
