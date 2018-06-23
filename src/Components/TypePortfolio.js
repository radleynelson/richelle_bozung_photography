import React from 'react';
import axios from 'axios';
import CarouselItem from './CarouselItem.js';

class TypePortfolio extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      images: [],
      type: ''
    }
  }
  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/galleries/'+this.props.match.params.id).then(res => {
      let photos = [];
      console.log(this.props);
      res.data.acf.images.forEach(image => {
        photos.push({photo: image.url})
      })
      this.setState(({
        images: photos,
        type: res.data.title.rendered,
      }))
    })
  }
  render(){
    return(
      <section>
      <div className="container">
          <h3>{this.state.type}</h3>
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
                      <CarouselItem key={index} type={index == 0 ? 'item active': 'item'} image={this.state.images[index].photo}/>
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
      </section>
    )
  }
}

export default TypePortfolio
