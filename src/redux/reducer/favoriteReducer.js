import { ADD_TO_FAVORITE } from "../action";

const initialState = {
  content: []
};
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload]
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        content: state.content.filter((jobdata, i) => {
          return jobdata._id !== action.payload;
        })
      };
    default:
      return state;
  }
};
export default favoriteReducer;
