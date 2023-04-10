import "./RoverCard.css";

const RoverCard = (props) => {

  const displayDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="RoverCard" id={`RoverCard-${props.id}`} onClick={props.onClick}>
      <h1>{props.name}</h1>
      <img alt={`Mars rover, ${props.name}`} src={props.profile_pic}/>
      <p>Mission {props.status}</p>
      <p>Launched {displayDate(props.launch_date)}</p>
      <p>Landed {displayDate(props.landing_date)}</p>
    </div>
  );

};

export default RoverCard;