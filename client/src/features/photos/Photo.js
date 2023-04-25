const Photo = (props) => {
  const {source} = props;
  
  return (
    <>
      <img alt="Mars" src={source}/>
    </>
  );
};

export default Photo;