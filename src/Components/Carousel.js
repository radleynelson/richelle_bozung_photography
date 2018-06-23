import React from 'react';
import CarouselItem from './CarouselItem.js';
import weddingPrimary from '../images/wedding.jpg';
import newbornPrimary from '../images/newborn.jpg';
import familyPrimary from '../images/family.jpg';
import axios from 'axios';

class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      images:[],
    }
  }

  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/galleries').then(res => {
      let photos  = [];
      res.data.forEach(gallery => {
        photos.push({
          photo: gallery.better_featured_image.source_url,
          message: gallery.title.rendered,
          id: gallery.id,
        })
        this.setState(({
          images: photos,
        }))
      })
    })
    // this.setState(({
    //     images:[{photo:weddingPrimary, message:'Wedding'}, {photo:newbornPrimary, message: 'New Born'}, {photo:familyPrimary, message: 'Family'},],
    //   }));
  }
  render(){
    return(
      <div className="container-fluid">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  {
                    this.state.images.map((item, index)=> (
                      <li key={index} data-target="#myCarousel" data-slide-to={index} className={index == 0 ? 'active' : undefined}></li>
                    ))
                  }
              </ol>

              <div className="carousel-inner">
                  {
                    this.state.images.map((item, index) => (
                      <CarouselItem key={index} type={index == 0 ? 'item active': 'item'} image={this.state.images[index].photo} portfolioID={this.state.images[index].id} message={this.state.images[index].message}/>
                    ))
                  }

              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
    )
  }
}

export default Carousel;
