import {connect} from "react-redux";
import {RoverWrapper} from "./RoverWrapper";
import {useState} from "react";
import {useToggle} from "../../common/useToggle";

import "./RoverList.css";

const RoverList = (props) => {

  const [isShow, setIsShow] = useToggle(true);

  const handleClick = (e) => {
    setRovers(rovers.map((r) => {
      console.log(`ID: ${r.id}, isShow: ${r.visible}`);
      return e.target.attributes.roverid.value === r.id.toString() ? {...r, visible: !!r.visible} : {...r, visible: !r.visible}
    }))
  };

  const [rovers, setRovers] = useState(props.rovers.map((rover) => ({...rover, onClick: handleClick, visible: isShow})));

  const displayRovers = () => {
    if (props.loading) return "Loading...";
    return rovers.map((r) => <RoverWrapper {...r} key={r.id} onClick={r.onClick} visible={r.visible}/>);
  };

  return (
    <div id="RoverList">
      {displayRovers()}
    </div>
  );

};

const mapStateToProps = (state) => ({rovers: Object.values(state.rovers.byId)});
export default connect(mapStateToProps)(RoverList);