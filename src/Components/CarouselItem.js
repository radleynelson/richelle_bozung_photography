import React from 'react';
import {Link} from 'react-router-dom';


class CarouselItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {

    }
  }
  handleClick(portfolioID){
    return('/Portfolio/'+this.props.id)

  }
  render(){
    return(
      <div className={this.props.type}>
          <img src={this.props.image} alt="New Born Photography" style={{width:"100%"}}/>
          {
            this.props.message != undefined &&
            <div className="carousel-caption">
                <h3 style={{color: "white"}}>{this.props.message}</h3>
                <Link to={'/Portfolio/'+this.props.portfolioID}><button type="button" className="btn btn-primary outline btn-lg caroButton">View</button></Link>
            </div>
          }

      </div>
    )
  }
}
export default CarouselItem;
