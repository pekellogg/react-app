import { useRoverContext } from "./useRoverContext";

const TestRoverList = () => {
  const rovers = useRoverContext();

  return (
    <>
      {
        rovers.map(({ id, external_id, name, landing_date, launch_date, status, created_at, updated_at, profile_pic }) => (
          <div key={id}>
            <p>id: { id }</p>
            <p>external_id: { external_id }</p>
            <p>name: { name }</p>
            <p>landing_date: { landing_date }</p>
            <p>launch_date: { launch_date }</p>
            <p>status: { status }</p>
            <p>created_at: { created_at }</p>
            <p>updated_at: { updated_at }</p>
            {/* <p>{max_sol}</p> */}
            {/* <p>{max_date}</p> */}
            {/* <p>{total_photos}</p> */}
            <p>profile_pic: { profile_pic }</p>
          </div>
        ))
      }
    </>
  );
};

export default TestRoverList;