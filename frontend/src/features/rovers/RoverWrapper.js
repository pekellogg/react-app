import {RoverContext} from "../../common/RoverContext";
import {useToggle} from "../../common/useToggle";
import RoverCard from "./RoverCard";
import RoverShow from "./RoverShow";

export const RoverWrapper = (props) => {

  const [isShow, setIsShow] = useToggle();

  const handleClick = (e) => {
    setIsShow(false);
  };

  return (
    <div className="RoverItem" id={`RoverItem-${props.id}`} onClick={props.onClick}>
      <RoverContext.Provider key={props.id} value={props.id}>
        <RoverCard {...props} onClick={handleClick}/>
        <RoverShow {...props} visible={isShow}/>
      </RoverContext.Provider>
    </div>
  );
};