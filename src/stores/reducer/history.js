const initialState = {
  data: [],
};
const dataHistory = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_HISTORY":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default dataHistory;
