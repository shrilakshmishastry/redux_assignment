export default (state,action) =>{
  console.log(state);
  switch (action.type) {
    case "SET_NAME":
      state.name=action.text;
    return state;
    default:
        return state;
  }

};
