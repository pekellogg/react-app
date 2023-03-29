const Camera = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Full name: {props.full_name}</p>
      <p>ID: {props.id}</p>
      <p>External ID: {props.external_id}</p>
      <p>Created at: {props.created_at}</p>
      <p>Updated at: {props.updated_at}</p>
      {/* {console.log(props.photos)} */}
    </div>
  )
};

export default Camera;