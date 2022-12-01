const initialState = {
  favorite: {
    content: []
  }
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          content: [...state.favorite.content, action.payload]
        }
      };
    default:
      return state;
  }
};
export default mainReducer;
