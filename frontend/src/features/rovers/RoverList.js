import {connect} from "react-redux";
import {useState} from "react";
import {RoverListItem} from "./RoverListItem";

import "./RoverList.css";

const RoverList = (props) => {

  const handleClick = (e) => {
    // investigate CameraButton 'wiring' to RoverList
    if (e.target.attributes.class.value === "RoverCard") {
      const roverId = e.target.attributes.roverid.value;
      setRovers((prevRovers) => prevRovers.map((r) => {
        if (r.id.toString() === roverId) return {...r};
        if (r.style.display === "block") {
          return {...r, style: {display: "none"}};
        } else {
          return {...r, style: {display: "block"}};
        }
      }))
    }
  };

  const [rovers, setRovers] = useState(props.rovers.map((rover) => ({...rover, onClick: handleClick, style: {display: "block"}})));

  const displayRovers = () => {
    if (props.loading) return "Loading...";
    return rovers.map((r) => <RoverListItem {...r} key={r.id} onClick={r.onClick} style={r.style}/>);
  };

  return (
    <div id="RoverList">
      {displayRovers()}
    </div>
  );

};

const mapStateToProps = (state) => ({rovers: Object.values(state.rovers.byId)});
export default connect(mapStateToProps)(RoverList);