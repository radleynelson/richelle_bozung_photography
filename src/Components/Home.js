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

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      HomeOverview: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a",
      BlogOverview: "Professional Photographer in Durham, Chapel Hill Area.",
      Portfolios: [],
    }
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
        HomeOverview: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a",
        BlogOverview: "Professional Photographer in Durham, Chapel Hill Area.",
        Portfolios: galleries,

      }));
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
          <h1>
            {this.state.BlogOverview}
          </h1>
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
          <h3>
              Blah blah golf gasdf kfjdki i dfg ;adifj adf Blah blah golf gasdf kfjdki i dfg ;adifj adf
              Blah blah golf gasdf kfjdki i dfg ;adifj adf
              Blah blah golf gasdf kfjdki i dfg ;adifj adf
          </h3>
          <Link to='/Contact'><button type="button" className="btn btn-primary outline btn-lg contactButton" style={{borderColor: 'black ', color: 'black'}}>Contact</button></Link>
      </div>
  </div>
      </section>
    )
  }
}

export default Home;
