import store from "./store";
import { bugAdded } from './actions'

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});

console.log(store.getState())