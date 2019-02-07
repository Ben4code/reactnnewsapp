import React, { Component } from 'react'
import { newsCounter, galleryCounter } from '../../actions/dispatchActions';
import { connect } from 'react-redux';


class LikesCounter extends Component {


    thumbsCounter = (likes, dislikes, type) => {
        const articleId = this.props.articleId;
        const galleryId = this.props.galleryId;
        if (type === 'liked') {
            const liked = [likes + 1, dislikes]
            this.props.source === 'news' ? this.props.newsCounter(articleId, liked) : this.props.galleryCounter(galleryId, liked)
        } else {
            const disliked = [likes, dislikes + 1]
            this.props.source === 'news' ? this.props.newsCounter(articleId, disliked) : this.props.galleryCounter(galleryId, disliked)
        }
    }

    render() {
        return (
            <div>
                <div className="addLikes-wrapper">
                    <h2>How do you feel about this?</h2>
                    <div className="addLikes-container">
                        <div className="btn like">
                            <div className="hits">{this.props.likes}</div>
                            <div className="icon" onClick={this.thumbsCounter.bind(this, this.props.likes, this.props.dislikes, 'liked')}>
                                <i className="fa fa-thumbs-up fa-3x"></i>
                            </div>
                        </div>
                        <div className="btn dislike">
                            <div className="hits">{this.props.dislikes}</div>
                            <div className="icon" onClick={this.thumbsCounter.bind(this, this.props.likes, this.props.dislikes, 'disliked')}>
                                <i className="fa fa-thumbs-down fa-3x"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default connect(null, { newsCounter, galleryCounter })(LikesCounter)