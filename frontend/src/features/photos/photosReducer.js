function photosReducer(state = {byId: {}, allIds: [], loading: false}, action) {
  switch (action.type) {
    case "LOADING_PHOTOS":
      return {...state, loading: action.loading};
 
    case "FETCHED_PHOTOS":
      const byId = {};
      const allIds = [];
      action.payload.map((photo) => {
        byId[`${photo.id}`] = {...photo, camera_id: photo.camera_id, rover_id: photo.rover_id};
        allIds.push(`${photo.id}`);
      })
      return {byId, allIds, loading: action.loading};

    default:
      return state;
  }
 };
 
export default photosReducer;