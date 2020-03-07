import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

=======
>>>>>>> parent of 593bbd9... Added dependencies and improved scaleability
=======
>>>>>>> parent of 593bbd9... Added dependencies and improved scaleability
=======
>>>>>>> parent of 593bbd9... Added dependencies and improved scaleability
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

  // async handleSubmit(e) {
  //   e.preventDefault()
  //   this.setState({buttonText: 'Sending...'})
    
  //   axios.post('https://jsonplaceholder.typicode.com/posts', ['asd', 'asd', 'asd'])
  //   .then((res)=>{console.log(res)})
  //   .catch((err)=>{console.log(err)})

  //   // axios({
  //   //   method: "POST", 
  //   //   url:"/send", 
  //   //   data: {
  //   //   name: this.state.name,
  //   //   email: this.state.email,
  //   //   subject: this.state.subject,
  //   //   message: this.state.message
  //   //   }
  //   //   }).then((response)=>{
  //   //       if (response.data.msg === 'success'){
  //   //           alert("Email sent, awesome!"); 
  //   //           this.resetForm()
  //   //       }else if(response.data.msg === 'fail'){
  //   //           alert("Oops, something went wrong. Try again")
  //   //       }
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error.response)
  //   //   })
  // }
=======
      message: ''
    };
  }
  resetForm(){
    this.setState({name: '', email: '', subject: '', message: ''});
 }

=======
      message: ''
    };
  }
  resetForm(){
    this.setState({name: '', email: '', subject: '', message: ''});
 }

>>>>>>> parent of 593bbd9... Added dependencies and improved scaleability
=======
      message: ''
    };
  }
  resetForm(){
    this.setState({name: '', email: '', subject: '', message: ''});
 }

>>>>>>> parent of 593bbd9... Added dependencies and improved scaleability
  handleSubmit(event) {
    console.log(this.state);
    this.resetForm();
  }
>>>>>>> parent of 593bbd9... Added dependencies and improved scaleability

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