import React from 'react';
import '../CSS/clean-blog.min.css';
import {Link} from 'react-router-dom';


class Footer extends React.Component {
  render(){
    return(
      <section>
        <br/>
        <footer className="nav navbar-default" style={{lineHeight: "100px"}}>
                <div className="container">
                    <div className="text-center">
                        <a target="_blank" style={{color: 'black'}} href="https://www.instagram.com/photos.by.richelle/"><i className="fa fa-lg fa-instagram" aria-hidden="true" style={{marginRight: '5px',}}></i></a>
                        <Link style={{color: 'black'}} to='/Contact'><i className="fa fa-lg fa-envelope-o" aria-hidden="true"></i></Link>
                        <a target="_blank" style={{color: 'black'}} href="https://www.facebook.com/Photos-By-Richelle-233746063830132/"><i className="fa fa-lg fa-facebook" style={{marginLeft:"5px"}} aria-hidden="true"></i></a>
                    </div>
                </div>
            </footer>

      <br/><br/>
        <div className="container text-center">
            <h4 className="text-center">Phone: 801-636-1168</h4>
            <h4>
                <i className="fa fa-copyright" aria-hidden="true">
                    Copyright 2017 Richelle Bozung Photography. All rights reserved.
                </i>
            </h4>
        </div>
      </section>
    )
  }
}

export default Footer
