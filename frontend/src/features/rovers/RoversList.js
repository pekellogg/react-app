import {connect} from "react-redux";
import {RoverContext} from "../../common/RoverContext";
import {RoverWrapper} from "./RoverWrapper";

import "./RoversList.css";

const RoversList = (props) => {

  const handleClick = (e) => {
    // console.log(e.target.attributes.roverid.value);
    console.log(e.target);
  };

  const displayRovers = () => {
    if (props.loading) return "Loading...";
    return props.rovers.map((rover) => (
      <RoverContext.Provider key={rover.id} value={rover.id}>
        <RoverWrapper {...rover} onClick={handleClick}/>
      </RoverContext.Provider>
    ));
  };

  return (
    <div id="RoversList">
      {displayRovers()}
    </div>
  );

};

const mapStateToProps = (state) => ({rovers: Object.values(state.rovers.byId)});
export default connect(mapStateToProps)(RoversList);