import React, { Component } from 'react'
import { getNews, clearNews } from '../actions/dispatchActions';
import { connect } from 'react-redux';
import LikesCounter from './UI/LikesCounter';

class News extends Component {

    componentDidMount() {
        this.props.getNews(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearNews();
    }

    showNews = (news) => {
        
        if (news) {
            return news.map((item) => {


                return (
                    <div key={item.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>

                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {item.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Article by: <strong>{item.author}</strong></span>
                        </div>
                        <img src={`/images/articles/${item.img}`} alt={`item.title`}/>
                        <div className="body_news">
                            {item.body}
                        </div>
                        <div>
                            <LikesCounter source="news" articleId={item.id} likes={item.likes[0]} dislikes={item.likes[1]} />
                        </div>
                    </div>
                )
            })
        }
    }


    render() {
        return (
            <div className="new_container">
                {this.showNews(this.props.articles.news)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps, { getNews, clearNews })(News)
