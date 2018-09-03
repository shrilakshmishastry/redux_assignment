export default (state,action) =>{
console.log(action.value);
  switch (action.type) {
    case "SET_NAME":
    console.log(action.value.name);
      state.name=action.value.name;
      state.password=action.value.password;
      state.mobile_num=action.value.mobile_num;
      state.balance=0;
    return state;
    case "CHECK":
      state.isOpen=action.isOpen;
      return state;
    default:
        return state;
  }

};
