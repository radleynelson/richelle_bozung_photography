import React from 'react';
import {Link} from 'react-router-dom';

class PortfolioType extends React.Component {
  render(){
    return(
      <div className="row">
          <div className="col-lg-2 col-md-2">

          </div>
          <div className="col-lg-6 col-md-6">
              <div className="thumbnail">
                  <img src={this.props.photo}/>
              </div>
          </div>
          <div className="col-lg-3 col-md-3 top_spacer" style={{marginTop: '85px'}}>
              <div>
                  <h1 className="text-left portfolio_header">{this.props.type} </h1>
                  <h3 className="portfolio_caption">{this.props.typeMessage}</h3>
                  <h4><Link className="portfolio_link" to={'/Portfolio/'+ this.props.portfolioID}>View {this.props.type} Portfolio</Link></h4>
              </div>
          </div>
      </div>
    )
  }
}

export default PortfolioType;
