import RoverCard from "./RoverCard";
import RoverShow from "./RoverShow";
import {useToggle} from "../../common/useToggle";

export const RoverWrapper = (props) => {

  const [isShow, setIsShow] = useToggle();

  return (
    <div className="RoverItem" id={`RoverItem-${props.id}`} onClick={props.onClick}>
      <RoverCard {...props} onClick={setIsShow}/>
      <RoverShow {...props} visible={isShow}/>
    </div>
  );
};