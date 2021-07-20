import { ACTION_TYPES } from "../actions/Episode";

const initialState = {
  Episodes: [],
  Episode: {},
};

export const Episodes = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_Episodes:
      return {
        ...state,
        Episodes: [...action.payload.results],
      };
    case ACTION_TYPES.FETCH_EpisodesById:
      return {
        ...state,
        Episode: [...action.payload.results],
      };

    default:
      return state;
  }
};
