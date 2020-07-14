import React from 'react';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
    this.state = {
      pageContent: '',
    }
  }

  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/pages/202').then(res => {
      this.setState(({
        pageContent: res.data.content.rendered
      }))
    })
  }

  createMarkup(){
    return {__html: this.state.pageContent}
  }

  render(){
    return (
      <section>
      <div className="container">
  <div className="row">
      <div className="col-md-3">

      </div>
      <div className="col-md-6">
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
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
