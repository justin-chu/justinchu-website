import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
  resetForm(){
    this.setState({name: '', email: '', subject: '', message: ''});
 }

  handleSubmit(event) {
    console.log(this.state);
    this.resetForm();
  }

  render() {
    return (
      <div class="pl-5 pr-5 mt-5 mb-5">
        
        <h3 class="text-center mb-3">Email me!</h3>
        <Form>
          <Form.Row>
            <div class="col-sm w-100">
              <Form.Control placeholder="Name" style={{marginBottom: 10}} value={this.state.name}
                onChange={(text) => {this.setState({name: text.target.value})}} />
            </div>
            <div class="col-sm w-100">
              <Form.Control placeholder="Email" style={{marginBottom: 10}} value={this.state.email}
                onChange={(text) => {this.setState({email: text.target.value})}} />
            </div>
          </Form.Row>
          <Form.Control placeholder="Subject" style={{marginBottom: 10}} value={this.state.subject}
            onChange={(text) => {this.setState({subject: text.target.value})}} />
          <Form.Control placeholder="Message" style={{marginBottom: 10}} value={this.state.message}
            onChange={(text) => {this.setState({message: text.target.value})}} as="textarea" rows="5" />
          <div class="text-center">
            <Button onClick={this.handleSubmit.bind(this)} type="submit">Submit</Button>
          </div>
        </Form>

      </div>
    );
  }
}
 
export default Contact;