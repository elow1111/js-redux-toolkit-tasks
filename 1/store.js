import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "TASK_ADD": {
            const { task } = action.payload; 
            return {
                ...state, 
                [task.id]: task, 
            };
        }
        case "TASK_REMOVE": {
            const { id } = action.payload; 
            return omit(state, id); 
        }
        default:
            return state; 
    }
};

const generateStore = (initialState) => createStore(reducer, initialState);

export default generateStore;
