import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
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

  handleFormSubmission(e) {
    e.preventDefault()
    console.log(e);
    // const FName = e.target.elements.name.value.trim();
    // const FEmail = e.target.elements.email.value.trim();
    // const FPhone = e.target.elements.mobile.value.trim();
    // const FSubject = e.target.elements.subject.value.trim();
    // const FMessage = e.target.elements.message.value.trim();
    //
    // this.setState(() => {
    //   return {
    //     formInfo: {
    //       Name: FName,
    //       Email: FEmail,
    //       PhoneNumber: FPhone,
    //       Subject: FSubject,
    //       Message: FMessage,
    //     },
    //   }
    // })
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
              <form role="form">
                  <br style={{clear:"both"}}/>
                  <h3 style={{marginBottom: "25px", textAlign: "center"}}>Lets Get in Touch!</h3>
                  <p className="text-center">
                      I would love to work with you. If you have any questions at all please dont hesitate to reach out to me.
                  </p>
                  <div className="form-group">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name" required/>
                  </div>
                  <div className="form-group">
                      <input type="text" className="form-control" id="email" name="email" placeholder="Email" required/>
                  </div>
                  <div className="form-group">
                      <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required/>
                  </div>
                  <div className="form-group">
                      <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required/>
                  </div>
                  <div className="form-group">
                      <textarea className="form-control" type="textarea" id="message" name="message" placeholder="Message" maxLength="400" rows="7"></textarea>
                      <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>
                  </div>

                  <button onClick={this.handleFormSubmission} type="submit" id="submit" name="submit" className="btn btn-primary pull-right" style={{backgroundColor: "black", color: "white"}}>Submit Form</button>
              </form>
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
