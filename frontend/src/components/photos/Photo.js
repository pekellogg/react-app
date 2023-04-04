const Photo = (props) => {
  return (
    <>
      {/* { console.log(`Photo: ${props.external_id}\nRover: ${props.rover_id}`) } */}
      <img { ...props } alt="Mars" src={props.source} />
    </>
  )
};

export default Photo;