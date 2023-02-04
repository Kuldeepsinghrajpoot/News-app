import React, { Component } from 'react'
export default class News extends Component {
  render() {
    let {title,decription,imageurl,url,author,published} = this.props;
    return (
      <div className='container my-3'>
           <div className="card" style={{width: "18rem"}}>
              <img src={imageurl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}..</h5>
                <p className="card-text">{decription}..</p>
                <p className="card-text"><small className="text-muted">by {author} and on {new Date(published).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
                <a href={url} className=" container btn btn-primary" target={"/"}>Read More</a>
              </div>
            </div>
      </div>
    )
  }
}
