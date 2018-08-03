import React from 'react';
import '../CSS/imageOverlay.css';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class PortfolioImage extends React.Component {
  render(){
    return(

        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="thumb">
                <Link to={'/Portfolio/'+this.props.id}>
                    <img className="img-responsive" src={this.props.image} />
                    <div className="hover-opaque">
                    </div>
                    <span style={{fontFamily: 'sans-serif'}} className="glyphicon" aria-hidden="true">{this.props.type}</span>
                </Link>
            </div>
        </div>
    )
  }
}

export default PortfolioImage;
