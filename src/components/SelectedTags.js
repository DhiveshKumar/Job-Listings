import React from "react";

export default function SelectedTags(props) {
  // console.log("in selectedtag")
  // console.log(props.selectedProperties)

  // CREATING SELECTED TAG ELEMENTS
  var selectedElemes = props.selectedProperties.map((property) => {
    return <div className="selected-tag d-flex me-3">
      <div className="selected-tag-name-container pt-2 mb-0">
        <p className="selected-tag-name fw-bold px-2 py-1 mb-0">{property}</p>
      </div>
      <i onClick={props.removeProperty} class="bi bi-x-square-fill"></i>
    </div>
  })



  return (
    <div className="container   px-5">
      <div className="selected-tags-container   d-flex align-items-center  bg-white shadow px-3  px-md-5">
        
        <div className="selected-tags-inner-container overflow-hidden d-flex flex-wrap mb-2">
        {selectedElemes}

        </div>
        {/* {selectedElemes} */}

        <a className="ms-auto clear-btn" onClick={props.clearProperties}>Clear</a>
      </div>


    </div>
  );
}
