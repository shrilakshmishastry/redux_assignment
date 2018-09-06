import React,{Component} from 'react';
import {store} from './store/index.js';
import {Container,Row,Col,Button,
Form, FormGroup, Label, Input,InputGroup,FormText } from 'reactstrap';
import axios from 'axios';
import add_money_handle from './actions/add_money_handle.js';
const Div ={
  fontFamily: 'Kosugi sans-serif'
};
// component Add_money_submit
class Add_money_submit extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    const name=store.getState().name;
    console.log(name);
    const password=store.getState().password;
    const balance=(event.target.elements[0].value);
    console.log(balance);
    axios.post('/add_money_submit',{
      value:{
        name:name,
        password:password,
        balance:balance
      }
    }

  )
  .then(
    response=>{
      console.log(response.data);
        const value=response.data;
        alert(balance+'has been added');
        store.dispatch(add_money_handle(value));
        this.props.history.push('/');

    }
  )
  }
  render(){
    return(
      <div style={Div}>
        <Container>
          <Row>
            <Col md={{size:6}}>
            <img src="./../dist/account_open.png" alt="account_submit"/>
            </Col>
            <Col md={{size:6}} className="mt-5 justify-content-center text-center">
            <h3 className="h1">ReduxBank</h3>
            <h6>Live with Peace</h6>
            <Form className="mt-4" onSubmit={this.handleSubmit}>
              <FormGroup className="mt-5">
                <InputGroup className="mt-5">
                  <Input type="text" id="tex" name="text" placeholder="Enter the amount" required/>
                </InputGroup>
                <InputGroup className="mt-5 justify-content-center">
                  <Button color="primary">
                    SUBMIT
                  </Button>
                </InputGroup>
              </FormGroup>
            </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Add_money_submit
