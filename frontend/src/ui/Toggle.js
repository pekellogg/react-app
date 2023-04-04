import React, { useState } from "react";

const Toggle = (props) => {

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button className={props.className} id={props.id} onClick={() => setToggle(!toggle)}>
        { props.buttontext }
      </button>
      { toggle && props.display }
    </>
  )
}
export default Toggle;