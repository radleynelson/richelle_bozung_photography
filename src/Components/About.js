import React from 'react';
import background from '../images/wedding-1.jpg';
import '../CSS/clean-blog.min.css';
import axios from 'axios';


class About extends React.Component {
  constructor(props){
    super(props);
    this.createMarkup = this.createMarkup.bind(this);
    this.state = {
      pageContent: '',
      coverPhoto: '',
      subTitle: '',
      title: '',
    }
  }
  createMarkup(){
    return {__html: this.state.pageContent}
  }
  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/pages/52').then(res => {
      this.setState(({
        pageContent: res.data.content.rendered,
        coverPhoto: res.data.better_featured_image.media_details.sizes.large.source_url,
        subTitle: res.data.acf.sub_title,
        title: res.data.title.rendered,
      }))
    })
  }
  render(){
    return(
      <section>
        <header className="masthead" style={{backgroundImage: `url(${this.state.coverPhoto})`}}>
          <div style={{background: 'none'}} className="overlay"></div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-md-10 mx-auto">
                      <div className="page-heading">
                          <span className="subheading">{this.state.subTitle}</span>
                      </div>
                  </div>
              </div>
          </div>
      </header>

        <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={this.createMarkup()}>
              </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
