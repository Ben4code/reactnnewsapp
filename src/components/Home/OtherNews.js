import React from 'react'
import {Link} from 'react-router-dom'

export default function OtherNews(props) {


    const showOtherNews = ({otherNews}) => {
        if(otherNews){
            return otherNews.map((item)=>{
                const styles = {
                    flexGrow: '1',
                    width: '100px',
                    height: '120px',
                    objectFit: 'cover',
                }
                return (
                    <Link to={`/news/${item.id}`} key={item.id} className="item">
                    <img className="left" alt={item.title} src={`/images/articles/${item.img}`} style={styles}/>

                    <div className="right">
                        <h3>{item.title}</h3>
                        <div className="category-tag">
                            {item.category}
                        </div>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
    }

  return (
    <div className="other-news">
      <h2>Other News</h2>
      <div className="other-items">
        {showOtherNews(props)}
        
      </div>
    </div>
  )
}
