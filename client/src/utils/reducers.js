import {
  SET_HEALTH,
  SET_PLAYERS,
  UPDATE_PLAYER
} from "./actions";

const initialState = {
  health: 40,
  players: [
    {
      name: "Mav",
      playerNum: 2,
      color: 'blue',
      hp: 40
    },
    {
    name: "Reagan",
    playerNum: 1,
    color: 'green',
    hp: 40
  },
  ]
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
      case UPDATE_PLAYER:
        return {
          ...state,
          players: action.players
        }

    default:
      return state;
  }
};

export default reducers;