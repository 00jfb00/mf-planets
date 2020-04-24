const _NAME = "PLANETS";

export const _TYPES = {
  _getPlanets: `${_NAME}::GET_PLANETS`
};
export const _STATUS = {
  _fetching: "FETCHING",
  _done: "DONE",
  _failed: "FAILED"
};
const action = {};
action.getPlanets = () => dispatch => {
  dispatch({
    type: _TYPES._getPlanets,
    status: _STATUS._fetching
  });

  Promise.race([
    new Promise(resolve =>
      setTimeout(() => resolve("promise 1 resolved"), 3000)
    )
  ])
    .then(() =>
      dispatch({
        type: _TYPES._getPlanets,
        status: _STATUS._done,
        payload: {
          id: 1,
          name: "Terra"
        }
      })
    )
    .catch(err =>
      dispatch({
        type: _TYPES._getPlanets,
        status: _STATUS._failed,
        err
      })
    );
};
export default action;
