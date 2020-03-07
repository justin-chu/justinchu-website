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
      error: ''
    }
  }
  
  resetForm(){
    this.setState({name: '', email: '', subject: '', message: '', buttonText: 'Send Email'})
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div class="pl-5 pr-5 mt-5 mb-5">

        <h3 class="text-center mb-3">Email me!</h3>

        <form name="contact" method="POST" data-netlify="true" netlify>
       
        <div class="col">
      <input type="text" name="name" class="form-control" placeholder="Name">
    </input></div>
    <div class="col">
      <input type="email" name="email" class="form-control" placeholder="Email">
    </input>
  </div>
  <input type="text" name="subject" class="form-control" placeholder="Subject"></input>
          <textarea name="message"></textarea>
          <button type="submit">Send</button>

        </form>
        {/* <Form>
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
            <Button onClick={this.handleSubmit.bind(this)} type="submit">{this.state.buttonText}</Button>
          </div>
        </Form> */}

      </div>
    );
  }
}
 
export default Contact;