import React,{Component} from 'react';
import {Container,Row,Col,Button,
Form, FormGroup, Label, Input,InputGroup,FormText} from 'reactstrap';
require('./../images/about-head-img.png')
const Div ={
  fontFamily: 'Kosugi sans-serif'
};
// component to with_draw
class Withdraw_money extends React.Component{
  render(){
    return(
      <div style={Div}>
      <Container className="mt-md-5">
        <Row className="mt-md-5">
          <Col md={{size:6 }} className='mt-5 '>
            <img src='./../dist/about-head-img.png' alt='hello world' className="ml-3"/>
          </Col>
          <Col md={{size:6}} className="mt-5">
            <h2 className="mt-5 ml-5">Withdraw money </h2>
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
export default Withdraw_money;
