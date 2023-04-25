import {connect} from "react-redux";
import {useState} from "react";
import {RoverListItem} from "./RoverListItem";

import "./RoverList.css";

const RoverList = (props) => {
  const {loading, rovers} = props;

  const handleClick = (e) => {
    // investigate CameraButton 'wiring' to RoverList
    if (e.target.attributes.class.value === "RoverCard") {
      const roverId = e.target.attributes.roverid.value;
      setLocalRovers((prevLocalRovers) => prevLocalRovers.map((r) => {
        if (r.id.toString() === roverId) return {...r};
        if (r.style.display === "block") {
          return {...r, style: {display: "none"}};
        } else {
          return {...r, style: {display: "block"}};
        }
      }))
    }
  };

  const [localRovers, setLocalRovers] = useState(rovers.map((r) => ({...r, onClick: handleClick, style: {display: "block"}})));

  const displayRovers = () => {
    if (loading) return "Loading...";
    return localRovers.map((r) => <RoverListItem {...r} key={r.id} onClick={r.onClick} style={r.style}/>);
  };

  return (
    <div id="RoverList">
      {displayRovers()}
    </div>
  );
};

const mapStateToProps = (state) => ({rovers: Object.values(state.rovers.byId)});
export default connect(mapStateToProps)(RoverList);