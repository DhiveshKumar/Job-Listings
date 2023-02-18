import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { nanoid } from "nanoid";
import pcHeader from "./images/bg-header-desktop.svg";
import mobileHeader from "./images/bg-header-mobile.svg";
import Job from "./components/Job";
import SelectedTags from "./components/SelectedTags";
import photosnapImg from "./images/photosnap.svg";
import manageImg from "./images/manage.svg";
import accountImg from "./images/account.svg";
import myhomeImg from "./images/myhome.svg";
import loopImg from "./images/loop-studios.svg";
import faceitImg from "./images/faceit.svg";
import shortlyImg from "./images/shortly.svg";
import insureImg from "./images/insure.svg";
import eyecamImg from "./images/eyecam-co.svg";
import airImg from "./images/the-air-filter-company.svg";
import { Alert } from "bootstrap";

function App() {
  // PROPERTY BAR STATE
  const [isPropertyBarVisible, setPropertyBarVisible] = React.useState(false);

  // SELECTED PROPERTIES LIST
  const [selectedProperties, setSelectedProperties] = React.useState([]);

  // SELECTED JOB BASED ON PROPERTIES
  const [selectedJobs, setSelectedJobs] = React.useState([]);

  // CURRENT JOB
  const [currentJob, setCurrentJob] = React.useState();

  // PROPERTY ONLICK FUNCTION
  function propertyClick(event) {

    if(window.screen.width<576){
      document.getElementsByClassName("header")[0].classList.add("mb-110")
    }

    // for the current job(left green border thing)
    event.target.parentElement.parentElement.parentElement.classList.add(
      "job-selected"
    );
    if(currentJob==null){
      
      setCurrentJob(event.target.parentElement.parentElement.parentElement)
      
      
    }
    else{
      
      currentJob.classList.remove("job-selected")
      console.log(event.target.parentElement.parentElement.parentElement)
      setCurrentJob(event.target.parentElement.parentElement.parentElement)
      event.target.parentElement.parentElement.parentElement.classList.add(
        "job-selected"
      );
    }

    if (selectedProperties.length == 0) {
      setPropertyBarVisible((state) => !state);
      if(isPropertyBarVisible){
        console.log(document.getElementsByClassName("jobs-container").classList);
      }
      setSelectedProperties(() => {
        var newProperties = [];

        newProperties.push(event.target.innerHTML);
      
        return newProperties;
        // return selectedProperties.push(event.target.innerHTML);
      });
    } else {
      // checking if the property is already selected or present in the properties bar
      var isSelected = false;
      for (var i = 0; i < selectedProperties.length; i++) {
        if (selectedProperties[i] == event.target.innerHTML) {
          isSelected = true;
        }
      }

      if (!isSelected) {
        setSelectedProperties((selectedProperties) => {
          var newProperties = [];
          for (var i = 0; i < selectedProperties.length; i++) {
            newProperties.push(selectedProperties[i]);
          }
          newProperties.push(event.target.innerHTML);

          return newProperties;
          // return selectedProperties.push(event.target.innerHTML);
        });
        
      }
    }
    // console.log(selectedProperties)
    


    
   
    
  }

  


  // REMOVING A PROPERTY FROM SELECTED PROPERTY BAR
  function removeProperty(event) {
    setSelectedProperties((selectedProperties) => {
      var newProperties = [];
      for (var i = 0; i < selectedProperties.length; i++) {
        newProperties.push(selectedProperties[i]);
      }

      for (var i = 0; i < selectedProperties.length; i++) {
        if (
          newProperties[i] ==
          event.target.parentElement.childNodes[0].childNodes[0].innerHTML
        ) {
          newProperties.splice(i, 1);
        }
      }
      if (newProperties.length == 0) {
        setPropertyBarVisible(false);
      }
      return newProperties;
    });
  }

  // CLEARING THE SELECTED PROPERTY TAB
  function clearProperties() {
    setSelectedProperties((properties) => []);
    setPropertyBarVisible(false);
    document.getElementsByClassName("header")[0].classList.remove("mb-110")

  }

  // check
  function checkCommon(arr1, arr2){
    var boolean = true;
    var count = 0;
    if(arr1 != undefined){
      for(var i=0; i< arr1.length; i++){
        if(arr2.includes(arr1[i])){
          count = 0;
        }
        else{
          return false
        }
      }
    }
    return boolean;


  }

  

  
  
  

  var dataArr = [
    {
      id: nanoid(),
      companyName: "Photosnap",
      img: photosnapImg,
      role: "Senior Frontend Developer",
      postTime: "1d ago",
      jobType: "Full Time",
      location: "USA only",
      properties: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
      isNew: true,
      isFeatured: true,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
      
      
    },
    {
      id: nanoid(),
      companyName: "Manage",
      img: manageImg,
      role: "Fullstack Developer",
      postTime: "1d ago",
      jobType: "Part Time",
      location: "Remote",
      properties: ["Fullstack", "Midweight", "React", "Python"],
      isNew: true,
      isFeatured: true,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
      
    },
    {
      id: nanoid(),
      companyName: "Account",
      img: accountImg,
      role: "Junior Frontend Developer",
      postTime: "2d ago",
      jobType: "Part Time",
      location: "USA only",
      properties: ["Frontend", "Junior", "React", "Sass", "Javascript"],
      isNew: true,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
  
    },
    {
      id: nanoid(),
      companyName: "MyHome",
      img: myhomeImg,
      role: "Junior Frontend Developer",
      postTime: "5d ago",
      jobType: "Contract",
      location: "USA only",
      properties: ["Frontend", "Junior", "CSS", "Javascript"],
      isNew: false,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
     
    },
    {
      id: nanoid(),
      companyName: "Loop Studios",
      img: loopImg,
      role: "Software Engineer",
      postTime: "1w ago",
      jobType: "Full Time",
      location: "Worldwide",
      properties: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"],
      isNew: false,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
     
    },
    {
      id: nanoid(),
      companyName: "FaceIt",
      img: faceitImg,
      role: "Junior Backend Developer",
      postTime: "2w ago",
      jobType: "Full Time",
      location: "UK only",
      properties: ["Backend", "Junior", "Ruby", "RoR"],
      isNew: false,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
      
    },
    {
      id: nanoid(),
      companyName: "Shortly",
      img: shortlyImg,
      role: "Junior Developer",
      postTime: "2w ago",
      jobType: "Full Time",
      location: "Worldwide",
      properties: ["Frontend", "Junior", "HTML", "Sass", "Javascript"],
      isNew: false,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
     
      
    },
    {
      id: nanoid(),
      companyName: "Insure",
      img: insureImg,
      role: "Junior Frontend Developer",
      postTime: "2w ago",
      jobType: "Full Time",
      location: "USA only",
      properties: ["Frontend", "Junior", "Vue", "Javascript", "Sass"],
      isNew: false,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
    
    },
    {
      id: nanoid(),
      companyName: "Eyecam Co.",
      img: eyecamImg,
      role: "Full Stack Engineer",
      postTime: "3w ago",
      jobType: "Full Time",
      location: "Worldwide",
      properties: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
      isNew: false,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
     
    },
    {
      id: nanoid(),
      companyName: "The Air Filter Company",
      img: airImg,
      role: "Front-end Dev",
      postTime: "1mo ago",
      jobType: "Part Time",
      location: "Worldwide",
      properties: ["Frontend", "Junior", "React", "Sass", "Javascript"],
      isNew: false,
      isFeatured: false,
      isSelected: false,
      propertyClick: propertyClick,
      isPropertyBarVisible: isPropertyBarVisible,
      selectedProperties: selectedProperties,
    
    },
  ];

  // CREATING JOBS
  var i = 0;
  var jobElems = dataArr.map((elem) => {
    return <Job id={elem.id} data={elem} checkCommon={checkCommon(selectedProperties,elem.properties)} />;
  });
  // console.log("job elems");
  // console.log(jobElems[0].props.data.properties)
  

  return (
    <div className="App">
      <header className="header  position-relative text-center ">
      
        {isPropertyBarVisible && (
          <SelectedTags
            className="position-absolute"
            removeProperty={removeProperty}
            selectedProperties={selectedProperties}
            clearProperties={clearProperties}
            
          />
        )}
      </header>

      <div className="jobs-container mt-md-5 pt-4 pb-5 mb-4">{jobElems}</div>
    </div>
  );
}

export default App;
