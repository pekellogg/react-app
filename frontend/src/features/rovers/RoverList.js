import {connect} from "react-redux";
import {RoverListItem} from "./RoverListItem";
import {useState} from "react";

import "./RoverList.css";

const RoverList = (props) => {

  const [rovers, setRovers] = useState(props.rovers.map((rover) => ({...rover})));

  const displayRovers = () => {
    if (props.loading) return "Loading...";
    return rovers.map((r) => <RoverListItem {...r} key={r.id}/>);
  };

  return (
    <div id="RoverList">
      {displayRovers()}
    </div>
  );

};

const mapStateToProps = (state) => ({rovers: Object.values(state.rovers.byId)});
export default connect(mapStateToProps)(RoverList);