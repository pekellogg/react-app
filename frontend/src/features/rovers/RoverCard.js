import "./RoverCard.css";

const RoverCard = (props) => {

  const displayDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="RoverCard" id={`RoverCard-${props.id}`} onClick={props.onClick}>
      <h1 className="RoverCard">{props.name}</h1>
      <img alt={`Mars rover, ${props.name}`} className="RoverCard" src={props.profile_pic}/>
      <p className="RoverCard">Mission {props.status}</p>
      <p className="RoverCard">Launched {displayDate(props.launch_date)}</p>
      <p className="RoverCard">Landed {displayDate(props.landing_date)}</p>
    </div>
  );

};

export default RoverCard;