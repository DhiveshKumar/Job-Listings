import React from "react"
import account from "../images/account.svg"
import { nanoid } from "nanoid";

export default function Job(props) {
    // console.log("in job component")
    // console.log(props.checkCommon);
     
    // CREATING PROPERTY ELEMENTS
    var properties = [];
    properties = props.data.properties.map((property) => {
        if(properties.length==0){
            return <div id={nanoid()} onClick={props.data.propertyClick} className="ms-md-3 ms-0 me-2 mb-3   mb-md-0 properties  fw-bold px-2 py-1">{property}</div>
        }
        else{
            return <div id={nanoid()} onClick={props.data.propertyClick}   className="me-2  mb-md-0  border-box  properties fw-bold px-2 py-1">{property}</div>
        }
    })



    return (
        <div className="container  job  ">
            <div className="job-container  position-relative  px-md-5 px-2 w-100">

                {props.data.selectedProperties.length >0 && props.checkCommon && <div className="job-box mx-auto row mb-5 mb-md-0 bg-white shadow d-flex row-y-padding mt-4   px-md-1">
                    <div className="col  details-container d-flex">
                        <img className="company-image img-fluid" src={props.data.img}></img>

                        <div className="company-details mt-2 mt-md-0">
                            <div className="tags-container d-flex align-items-center">
                                <div className="company-name ms-2 ms-md-3 fw-bold pt-1">{props.data.companyName}</div>
                                {props.data.isNew && <div className="new-tag ms-3 px-2 py-1 fw-bold">NEW!</div>}
                                {props.data.isFeatured && <div className="featured-tag ms-3 px-2 py-1 fw-bold">FEATURED</div>}
                            </div>

                            <div className="role fw-bold mt-2 ms-2 ms-md-3">{props.data.role}</div>

                            <div className="small-details mt-1 d-flex align-items-center justify-content-start">
                                <div className="post-time ms-2 ms-md-3">{props.data.postTime}</div>
                                
                                <div className="job-type ms-3">.</div>
                                
                                <div className="job-type ms-3">{props.data.jobType}</div>
                                <div className="job-type ms-3">.</div>
                                <div className="location ms-3">{props.data.location}</div>


                            </div>

                            

                        </div>
                        
                    </div>

                    {/* <div><hr className="horizontal-line-width  d-block d-md-none"></hr></div> */}
                    <hr className="horizontal-line-width mt-3  w-75 ms-3 d-block d-md-none"></hr>

                    

                    <div className="col d-md-flex   justify-content-md-end">
                        <div className="d-flex flex-wrap align-items-stretch align-items-md-center justify-content-start pt-0 justify-content-md-end   properties-container ">
                            
                            {properties}
                        </div>


                    </div>
                </div>}

                {props.data.selectedProperties.length==0 && <div className="job-box mx-auto row mb-5 mb-md-0 bg-white shadow d-flex row-y-padding mt-4   px-md-4">
                    <div className="col  details-container d-flex">
                        <img className="company-image img-fluid" src={props.data.img}></img>

                        <div className="company-details mt-2 mt-md-0">
                            <div className="tags-container d-flex align-items-center">
                                <div className="company-name ms-2 ms-md-3 fw-bold pt-1">{props.data.companyName}</div>
                                {props.data.isNew && <div className="new-tag ms-3 px-2 py-1 fw-bold">NEW!</div>}
                                {props.data.isFeatured && <div className="featured-tag ms-3 px-2 py-1 fw-bold">FEATURED</div>}
                            </div>

                            <div className="role fw-bold mt-2 ms-2 ms-md-3">{props.data.role}</div>

                            <div className="small-details mt-1 d-flex  justify-content-start">
                                <div className="post-time ms-2 ms-md-3">{props.data.postTime}</div>

                                <div className=" ms-3 dot"></div>
                                
                                <div className="job-type ms-3">{props.data.jobType}</div>
                                <div className=" ms-3 dot"></div>
                                <div className="location ms-3">{props.data.location}</div>


                            </div>

                            

                        </div>
                        
                    </div>

                    {/* <div><hr className="horizontal-line-width  d-block d-md-none"></hr></div> */}
                    <hr className="horizontal-line-width mt-3  w-75 ms-3 d-block d-md-none"></hr>

                    

                    <div className="col d-md-flex   justify-content-md-end">
                        <div className="d-flex flex-wrap align-items-stretch align-items-md-center justify-content-start pt-0 justify-content-md-end   properties-container ">
                            
                            {properties}
                        </div>


                    </div>
                </div>}

            </div>
        </div>

    )
}