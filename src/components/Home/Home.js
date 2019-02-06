import React, { Component } from 'react'
import Latest from './Latest';
import OtherNews from './OtherNews.js';
import Gallery from './Gallery';
import {getLatest, getOtherNews, getGalleries} from '../../actions/dispatchActions.js';
import {connect } from 'react-redux';

 class Home extends Component {

  componentDidMount(){
    this.props.getLatest();
    this.props.getOtherNews();
    this.props.getGalleries();
  }


  render() {
    return (
      <div>
        <Latest latest={this.props.articles.latest}/>
        <OtherNews otherNews={this.props.articles.otherNews}/>
        <Gallery galleries={this.props.galleries.galleries2}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    galleries: state.galleries1
  }
}

export default connect(mapStateToProps, {getLatest, getOtherNews, getGalleries} )(Home)