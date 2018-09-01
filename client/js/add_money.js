import React,{Component} from 'react';
import {store} from './store/index.js';
import {Container,Row,Col,Button,
Form, FormGroup, Label, Input,InputGroup,FormText } from 'reactstrap';
require('/home/shri/react_usercard/client/images/account_open.png');

const Div = {
  fontFamily: 'Kosugi sans-serif'
};
// class to Add_money component
class Add_money extends React.Component{
  render(){
    return(
      <div style={Div}>
        <Container className="mt-md-5">
          <Row className="mt-md-5">
            <Col md={{size:6}} className=''>
              <img src='./../dist/account_open.png' alt='hello world'/>
            </Col>
            <Col md={{size:6}} className="mt-5">
              <h2 className="mt-5 ml-5">Add money to your account</h2>
              <Form>
                <FormGroup>
                <InputGroup className="mt-5">
                <Input type='text' name='text'id='name' placeholder='Account_number' required/>
                  <Input type="password" name="password" id="password" placeholder="password" className="ml-md-3" required/>
                </InputGroup>
                <InputGroup className="mt-5 justify-content-center">
                <Button color="primary">
                    <small>
                      CONTINUE TO SUBMIT
                    </small>
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
export default Add_money;
