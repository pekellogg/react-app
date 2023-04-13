import {connect} from "react-redux";
import {useState} from "react";
import {RoverListItem} from "./RoverListItem";

import "./RoverList.css";

const RoverList = (props) => {

  const handleClick = (e) => {
    const roverId = e.target.attributes.roverid.value;
    setRovers(rovers.map((r) => {
      return r.id.toString() === roverId ? {...r} : {...r, style: {display: "none"}};
    }));
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