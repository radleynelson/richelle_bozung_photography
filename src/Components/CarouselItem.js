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
        <Link to={'/Portfolio/'+this.props.portfolioID}>
          <img src={this.props.image} alt="New Born Photography" style={{width:"100%"}}/>
        </Link>
      </div>
    )
  }
}
export default CarouselItem;
