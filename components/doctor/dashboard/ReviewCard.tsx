import React from 'react'

const ReviewCard = ({data}:{
    data:{
     
            Fname:string,
            Lname:string,
            profilePic:string;
            comment:string
        
    }
}) => {
  return (

     
      <li>
        <div className="comment">
          <img
            className="avatar rounded-circle"
            alt="User Image"
            src={data.profilePic}
          />
          <div className="comment-body">
            <div className="meta-data">
              <span className="comment-author">{data.Fname} {data.Lname}</span>
              <span className="comment-date">Reviewed 2 Days ago</span>
              <div className="review-count rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
              </div>
            </div>
            <p className="recommended">
              <i className="far fa-thumbs-up" /> I recommend the doctor
            </p>
            <p className="comment-content">
             {data.comment}
            </p>
            <div className="comment-reply">
              <a className="comment-btn" href="#">
                <i className="fas fa-reply" /> Reply
              </a>
              <p className="recommend-btn">
                <span>Recommend?</span>
                <a href="#" className="like-btn">
                  <i className="far fa-thumbs-up" /> Yes
                </a>
                <a href="#" className="dislike-btn">
                  <i className="far fa-thumbs-down" /> No
                </a>
              </p>
            </div>
          </div>
        </div>
       
  </li>

  
  
  )
}

export default ReviewCard