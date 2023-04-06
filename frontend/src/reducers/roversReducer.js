function roversReducer(state = { byId: {}, allIds: [], loading: false }, action) {
  switch (action.type) {
    case "LOADING_ROVERS":
      return {...state, loading: action.loading};
 
    case "FETCHED_ROVERS":
      const byId = {};
      const allIds = [];
      action.payload.map((rover) => {
        const cameras = rover.cameras.map((camera) => `${camera.id}`);
        byId[`${rover.external_id}`] = {
          ...rover,
          cameras
        };
        allIds.push(`${rover.external_id}`);
      });
      return {byId, allIds, loading: action.loading};
 
    default:
     return state;
  }
 }
 export default roversReducer;