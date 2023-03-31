const Photo = (props) => {
  return (
    <>
      <h4>Earth date: {props.earth_date}</h4>
      <img alt="Mars" src={props.source} />
    </>
  )
};

export default Photo;