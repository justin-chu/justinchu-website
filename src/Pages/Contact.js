import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false,
      buttonText: 'Send Email',
      colour: 'primary'
    }
  }

  handleSubmit = e => {
    this.setState({buttonText: 'Sending...', colour: 'secondary'})
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({buttonText: 'Sent!', name: '', email: '', subject: '', message: '', colour: 'success'}))
      .catch(error => alert(error));

    e.preventDefault();
    setTimeout(()=>{this.setState({buttonText: 'Send Email', colour: 'primary'})}, 3000);
  };

  render() {
    return (
      <div class="pl-5 pr-5 mt-5 mb-5">

        <h3 class="text-center mb-3">Email me!</h3>
        <Form>
          <Form.Row>
            <div class="col-sm w-100">
              <Form.Control placeholder="Name" name="name" style={{marginBottom: 10}} value={this.state.name}
                onChange={(text) => {this.setState({name: text.target.value})}} />
            </div>
            <div class="col-sm w-100">
              <Form.Control placeholder="Email" name="email" style={{marginBottom: 10}} value={this.state.email}
                onChange={(text) => {this.setState({email: text.target.value})}} />
            </div>
          </Form.Row>
          <Form.Control placeholder="Subject" name="subject" style={{marginBottom: 10}} value={this.state.subject}
            onChange={(text) => {this.setState({subject: text.target.value})}} />
          <Form.Control placeholder="Message" name="message" style={{marginBottom: 10}} value={this.state.message}
            onChange={(text) => {this.setState({message: text.target.value})}} as="textarea" rows="5" />
          <div class="text-center">
            <Button variant={this.state.colour} onClick={this.handleSubmit.bind(this)} type="submit">{this.state.buttonText}</Button>
          </div>
        </Form>

      </div>
    );
  }
}
 
export default Contact;