const add_money_handle = (value)=>{
  console.log(typeof value);
  return{
    type:'ADD_MONEY',
    value:{
      name:value.name,
      password:value.password,
      balance:value.balance
    }
  }
}
export default add_money_handle;
