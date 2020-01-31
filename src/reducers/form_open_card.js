import { CONSTANTS } from "../constants";

const initialState = {
  formOpen: false
};

export const formOpenCardReducer = (state = false, action) => {
  switch (action.type) {
    case CONSTANTS.OPEN_FORM_CARD:
      // return (state = !state);
      return {
        ...state,
        [action.id]: {
          // parentId: state.id,
          state: !state
        }
      };
    default:
      return state;
  }
};
