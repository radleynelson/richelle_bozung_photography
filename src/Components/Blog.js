import React from 'react';
import axios from 'axios';
import '../CSS/bootstrap.css';
import '../CSS/imageOverlay.css';
import PortfolioImage from './PortfolioImage.js';


class Blog extends React.Component {
  constructor(props){
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      posts: [],
    }
  }
  componentDidMount(){
    axios.get('https://admin.richellebozungphotography.com/wp-json/wp/v2/posts').then(res => {
      console.log(res.data);
        this.setState(({
          posts: res.data
        }));
    })
  }
  render(){
    return(
      <section>
        <div className="container">
          <h1>Blog</h1>
        </div>
        <div className="container">
          <div className='row'>
          {
            this.state.posts.map((post,index)=> (
              <div>
                <PortfolioImage image={this.state.posts[index].better_featured_image.source_url} type={this.state.posts[index].title.rendered} />
              </div>
            ))
          }
          </div>
        </div>
      </section>
    )
  }
}

export default Blog;
