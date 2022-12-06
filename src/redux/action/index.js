// const action = {
//   type: "INCREMENT",
//   payload: 1
// };

export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavoriteAction = (bookSelected) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: bookSelected
  };
};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...");
    try {
      const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
