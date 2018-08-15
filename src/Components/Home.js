import React from 'react';
import '../CSS/bootstrap.css';
import '../CSS/Home.css';
import Carousel from './Carousel.js';
import PortfolioType from './PortfolioType.js';
import weddingPrimary from '../images/wedding.jpg';
import newbornPrimary from '../images/newborn.jpg';
import familyPrimary from '../images/family.jpg';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactTransitions from 'react-transitions';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      HomeOverview: "",
      BlogOverview: "",
      Portfolios: [],
    }
  }
  createMarkup(){
    return {__html: this.state.BlogOverview}
  }
  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/galleries').then(res => {
      console.log(res.data);
      let data = res.data;
      let galleries = [];
      data.forEach(gallery => {
        galleries.push(
          {
            photo: gallery.better_featured_image.media_details.sizes.large.source_url,
            message: gallery.acf.about_gallery,
            type: gallery.title.rendered,
            id: gallery.id,
          }
      )
      })
      console.log('Test',galleries);
      this.setState(({
        Portfolios: galleries,

      }));
    }).catch(err => {
      console.log(err);
    });

    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/pages/70').then(res => {
      this.setState(({
        BlogOverview: res.data.content.rendered,
        HomeOverview: res.data.acf.site_summary,
        ContactMe: res.data.acf.contact_me,
      }))
    }).catch(err => {
      console.log(err);
    });

  }
  render(){
    return(
      <section>

        <Carousel />

  <div className="container">
      <div className="text-center">
          <h3 style={{marginTop: '40px', fontStyle: 'italic'}} className='sub_title_home' dangerouslySetInnerHTML={this.createMarkup()}></h3>
          <br/>
          <h2>
              {this.state.HomeOverview}
          </h2>

      </div>
      <hr className="bigHR"/>
  </div>

  <div className="container">
      {
        this.state.Portfolios.map((portfolio,index)=> (
          <PortfolioType key={index} photo={portfolio.photo} type={portfolio.type} portfolioID={this.state.Portfolios[index].id} typeMessage={this.state.Portfolios[index].message} />
        ))
      }
  </div>
  <hr/>

  <div className="container">
      <div className="text-center">
          <h3 style={{fontSize:'20px'}}>
              {this.state.ContactMe}
          </h3>
          <Link to='/Contact'><button type="button" className="btn btn-primary outline btn-lg contactButton" style={{border: 'none ', color: 'black', letterSpacing: '3px'}}>Contact</button></Link>
      </div>
  </div>
      </section>
    )
  }
}

export default Home;
