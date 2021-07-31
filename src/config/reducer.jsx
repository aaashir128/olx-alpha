export const initialState = {
  user: null,
  ad: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      case "CREATE_AD":
        return {
          ...state,
          ad: [...state.ad , action.item]
        }
    default:
      return state;
  }
};

export default reducer;
