const Photo = (props) => {
  return (
    <>
      <img { ...props } alt="Mars" src={props.source} />
    </>
  )
};

export default Photo;