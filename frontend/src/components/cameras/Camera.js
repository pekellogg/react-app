import "./Camera.css";

const Camera = (props) => {
  return (
    <>
      <button>{props.full_name}</button>
      <p className="Camera">Abbreviated name: {props.name}</p>
      <p className="Camera">ID: {props.id}</p>
      <p className="Camera">External ID: {props.external_id}</p>
      <p className="Camera">Created at: {props.created_at}</p>
      <p className="Camera">Updated at: {props.updated_at}</p>
      {console.log(props.photos)}
    </>
  )
};

export default Camera;