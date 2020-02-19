import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

class Contact extends Component {
  render() {
    return (
      <div style={{padding: 20}}>
        <p>
          <Form>
            <Form.Row>
              <div class="col-sm">
                <Form.Control placeholder="First name" />
              </div>
              <div class="col-sm">
                <Form.Control placeholder="Last name" />
              </div>
            </Form.Row>
          </Form>
        </p>
      </div>
    );
  }
}
 
export default Contact;