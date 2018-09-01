import React,{Component} from 'react';
import {Container,Row,Col,Button,
Form, FormGroup, Label, Input,InputGroup,FormText } from 'reactstrap';

const Div ={
  fontFamily: 'Kosugi sans-serif'
};
// component Add_money_submit
class With_money_submit extends React.Component{
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
            <Form className="mt-4">
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
export default With_money_submit
