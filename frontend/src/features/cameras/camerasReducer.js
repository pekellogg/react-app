function camerasReducer(state = {byId: {}, allIds: [], loading: false}, action) {
  switch (action.type) {
    case "LOADING_CAMERAS":
      return {...state, loading: action.loading};
 
    case "FETCHED_CAMERAS":
      const byId = {};
      const allIds = [];
      action.payload.forEach((camera) => {
        const photos = camera.photos.map((photo) => `${photo.id}`);
        byId[`${camera.id}`] = {...camera, photos};
        allIds.push(`${camera.id}`);
      })
      return {byId, allIds, loading: action.loading};

    default:
      return state;
  }
};
 
export default camerasReducer;