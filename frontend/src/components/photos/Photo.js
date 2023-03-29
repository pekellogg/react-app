const Photo = (props) => {
  return (
    <>
      <h4>Earth date: {props.earth_date}</h4>
      <img alt="Mars" src={props.source} />
      {/* <p>Sol: {props.sol}</p> */}
      {/* <p>ID: {props.id}</p> */}
      {/* <p>External ID: {props.external_id}</p> */}
      {/* <p>Created at: {props.created_at}</p> */}
      {/* <p>Updated at: {props.updated_at}</p> */}
    </>
  )
};

export default Photo;