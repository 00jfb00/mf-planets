import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import planetsReducer from "./planets/PlanetsReducer";
import planetsAction from "./planets/PlanetsAction";

let astrosReducer = combineReducers({
  planets: planetsReducer
});
const astrosAction = {
  planets: planetsAction
};
astrosReducer = persistReducer(
  {
    key: "astros",
    storage,
    whitelist: [],
    blacklist: []
  },
  astrosReducer
);
export { astrosReducer, astrosAction };
