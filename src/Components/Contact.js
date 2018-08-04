import React from 'react';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.state={
      formInfo: {
        Name: '',
        Email: '',
        PhoneNumber: '',
        Subject: '',
        Message: '',
      },
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFormSubmission(e) {
    e.preventDefault();

    const {Name, Email, PhoneNumber, Subject, Message} = this.state;
    console.log(e);

    axios.post('https://api.emailjs.com/api/v1.0/email/send',{
      service_id: 'richelle_photography',
      template_id: 'template_xEK8Gs83',
      user_id: 'user_XOzR8DPdCB2BWtXgAV00W',
      template_params: {
          'reply_to': this.state.Name,
          'from_name': this.state.Name,
          'message_html': this.state.Message,
          'email_address': this.state.Email,
          'phone_number': this.state.PhoneNumber,
          'subject': this.state.Subject,
      }
    } ).then(res=> {
      alert('Your mail is sent!');
  }).catch(err => {
      alert('Sorry an error occured, please try sending email again');
  })

document.getElementById('Contact').reset();
}

  render(){
    return (
      <section>
      <div className="container">
  <div className="row">
      <div className="col-md-3">

      </div>
      <div className="col-md-6">
          <div className="form-area">
              <Form id='Contact' onSubmit={this.handleFormSubmission}>

                <FormGroup>
                  <Input placeholder="Name" type='text' name='Name' onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                  <Input placeholder='Email' type='text' name='Email' onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                  <Input placeholder='Mobile Number' type='text' name='PhoneNumber' onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                  <Input placeholder='Subject' type='text' name='Subject' onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                  <Input rows='7' className='form-control' placeholder='Message' type='textarea' name='Message' onChange={this.handleChange} />
                </FormGroup>

                <Button style={{backgroundColor: 'black', color: 'white'}} className='btn btn-primary pull-right'>SUBMIT FORM</Button>

              </Form>
          </div>
      </div>
      <div className="col-md-3">

      </div>
  </div>

</div>
      </section>
    )
  }
}

export default Contact;
