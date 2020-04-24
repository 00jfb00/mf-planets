import * as Action from "./PlanetsAction";
import PlanetInterface from "../../../interfaces/Planet";

const initialState = {
  ...new PlanetInterface({}),
  error: undefined,
  status: undefined,
  type: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action._TYPES._getPlanets:
      return {
        ...state,
        status: action.status,
        type: action.type,
        ...new PlanetInterface(action.payload),
        error: action.error
      };
    default:
      return state;
  }
};
export default reducer;
