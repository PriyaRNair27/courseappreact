import React, { useState } from 'react'
import Header from './Header'

const Addcourse = () => {
    var [courseTitle,setcourseTitle]=useState("")
    var [courseDuration,setcourseDuration]=useState("")
    var [courseDescription,setcourseDescription]=useState("")
    var [courseVenue,setcourseVenue]=useState("")
    var [courseDate,setcourseDate]=useState("")
    const subdata=()=>{
        const data={"courseTitle":courseTitle,"courseDuration":courseDuration,"courseDescription":courseDescription,"courseVenue":courseVenue,"courseDate":courseDate}
    console.log(data)
    }
  return (
    <div>
<Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">COURSE TITLE</label>
                    <input onChange={(c)=>{setcourseTitle(c.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">COURSE DURATION</label>
                    <input  onChange={(c)=>{setcourseDuration(c.target.value)}} type="courseDate" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="for">COURSE DESCRIPTION</label>
                    <textarea onChange={(c)=>{setcourseDescription(c.target.value)}} name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">COURSE VENUE</label>
                    <input  onChange={(c)=>{setcourseVenue(c.target.value)}}type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="for">COURSE DATE</label>
                    <input  onChange={(c)=>{setcourseDate(c.target.value)}} type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                         <button  onClick={subdata}className="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addcourse