import {
  SET_HEALTH,
  SET_PLAYERS
} from "./actions";

const initialState = {
  health: 40,
  players: []
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEALTH:
      return {
        ...state,
        health: action.health
      }
    case SET_PLAYERS:
      return {
        ...state,
        players: action.players
      }
    
    default:
      return state;
  }
};

export default reducers;