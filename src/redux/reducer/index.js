// const initialState = {
//   favorite: {
//     content: []
//   }
// };
// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_FAVORITE":
//       return {
//         ...state,
//         favorite: {
//           ...state.favorite,
//           content: [...state.favorite.content, action.payload]
//         }
//       };
//     case "REMOVE_FROM_FAVORITE":
//       return {
//         ...state,
//         favorite: {
//           ...state.favorite,
//           content: state.favorite.content.filter((jobdata, i) => {
//             return jobdata._id !== action.payload
//           }),
//         }
//       };
//     default:
//       return state;
//   }
// };
// export default mainReducer;
