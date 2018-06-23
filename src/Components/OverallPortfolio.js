import React from 'react';
import PortfolioImage from './PortfolioImage.js';
import weddingPrimary from '../images/wedding.jpg';
import newbornPrimary from '../images/newborn.jpg';
import familyPrimary from '../images/family.jpg';
import axios from 'axios';

class OverallPortfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      portfolioImages: [],
    }
  }
  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/pages/48').then(res => {
      let photos = [];
      res.data.acf.portfolio.forEach(image => {
        photos.push(
            {
              photo: image.sizes.large,
              type: image.description,
            }
          )
          this.setState(({
            portfolioImages: photos,
          }))
      })
    })
  }
  render(){
    return(
      <section>
        <div className="container">
          <h1>Portfolio</h1>
        </div>
        <div className="row">
        {
          this.state.portfolioImages.map((image,index) => (
            <PortfolioImage key={index} type={image.type} image={image.photo} />
          ))
        }
        </div>
      </section>

    )
  }
}

export default OverallPortfolio;
