import React from 'react'
import {Link} from 'react-router-dom'

const Latest = (props) => {



        const showLatest = (latest) => {
            if(latest){
                return latest.map((item)=>{
                    return (
                        <Link to={`/news/${item.id}`} key={item.id} className="item">
                            
                            <div className="image-cover" style={{background: `url(/images/articles/${item.img}) no-repeat`}}>
                            <div className="description">
                                <span>{item.category}</span>
                                <div>{item.title}</div>
                            </div> 
                            </div>
                        </Link>
                        
                    )
                })
            }
        }


    return (
        <div>
            <div className="home-latest">
                {showLatest(props.latest)}
            </div>
        </div>
    )
}

export default Latest;
