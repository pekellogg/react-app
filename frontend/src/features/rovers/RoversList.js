import {connect} from "react-redux";
import {RoverWrapper} from "./RoverWrapper";

import "./RoversList.css";

const RoversList = (props) => {

  const displayRovers = () => {
    if (props.loading) return "Loading...";
    return props.rovers.map((rover) => <RoverWrapper {...rover} key={rover.id}/>);
  };

  return (
    <div id="RoversList">
      {displayRovers()}
    </div>
  );

};

const mapStateToProps = (state) => ({rovers: Object.values(state.rovers.byId)});
export default connect(mapStateToProps)(RoversList);