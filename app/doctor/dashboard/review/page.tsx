import ReviewCard from '@/components/doctor/dashboard/ReviewCard'
import React from 'react'



const Review:{
    Fname:string,
    Lname:string,
    profilePic:string,
    comment:string
}[] = 
[
    {
        comment:"Very Good lorem dfdf dfdfdfd dfdf dfdf",
        Fname:"Ranjit",
        Lname:"Das",
        profilePic:"/assets/doctor-1.jpg"
    }
]

const page = () => {
  return (
    <div className="doc-review review-listing">
    {/* Review Listing */}
    <ul className="comments-list">

        {Review.map((r,i)=>{
            return <ReviewCard data={r} />
        })}
    
    </ul>
    </div>
  )
}

export default page