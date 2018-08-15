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
      portfolioLinker: [],
    }
  }
  findMatch(name){
    let match = '';
    for (let iCount = 0; iCount < this.state.portfolioLinker.length; iCount ++){
      if(name.toLowerCase() == this.state.portfolioLinker[iCount].name.toLowerCase()){
        match = this.state.portfolioLinker[iCount].id;
      }
    }
    return match
  }
  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/galleries').then(res => {
      let temp = []
      for (let iCount = 0; iCount < res.data.length; iCount++){
        temp.push({
          name: res.data[iCount].title.rendered,
          id: res.data[iCount].id
        })
      }
      this.setState(({
        portfolioLinker: temp
      }));
    }).then(nothing => {
      axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/pages/48').then(res => {
        let photos = [];
        res.data.acf.portfolio.forEach(image => {
          let match = this.findMatch(image.description);

          photos.push(
              {
                photo: image.sizes.large,
                type: image.description,
                id: match,
              }
            )
            this.setState(({
              portfolioImages: photos,
            }))
        })
      });
    })
  }
  render(){
    return(
      <section>
        <div className="container">
        </div>
        <div className="row">
        {
          this.state.portfolioImages.map((image,index) => (
            <PortfolioImage key={index} type={image.type} id={image.id} image={image.photo} />
          ))
        }
        </div>
      </section>

    )
  }
}

export default OverallPortfolio;
