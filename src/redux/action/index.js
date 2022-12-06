// const action = {
//   type: "INCREMENT",
//   payload: 1
// };

export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToFavoriteAction = (bookSelected) => {
  console.log("bookSelected-->", bookSelected);
  return {
    type: ADD_TO_FAVORITE,
    payload: bookSelected
  };
};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...");
    try {
      const baseEndpoint =
        " https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: false
        });
        setTimeout(() => {
          dispatch({
            type: GET_JOBS_LOADING,
            payload: false
          });
        }, 100);
      } else {
        alert("Error fetching results");
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false
      });

      dispatch({
        type: GET_JOBS_ERROR,
        payload: true
      });
    }
  };
};


