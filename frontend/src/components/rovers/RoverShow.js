import CamerasContainer from "../cameras/CamerasContainer";

const RoverShow = (props) => {
  return (
    <div className="RoverShow" id={props.id}>
      <CamerasContainer { ...props }/>
    </div>
  )
};

export default RoverShow;