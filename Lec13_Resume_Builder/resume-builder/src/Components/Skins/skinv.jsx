import React, { Component } from 'react';
import "./MySkin.css";

class MySkin extends Component {

    state = { 
         contactDetails: {
            fname: "TONY",
            lname: "ALMEIDA",
            summary: "4+ years experienced Software Engineer highly skilled in software development, testing, documentation etc. across the complete development life cycle of a product. Adept at end to end software design & development including requirement gathering, documentation, infrastructure setup, coding & unit & integration testing. Handles complex project management & coordination work very efficiently to deliver results. ",
            email: "tony@gmail.com",
            phone: "+1 (333)5557777",
            profession: "Software Engineer",
            houseNo:"123",
            street: "xyz",
            city: "SF",
            state: "CA",
            country: "USA",
            pin: "123456",
          },
          educationDetails: {
            collegeName: "UC Berkeley",
            degree: "B.E. Computer Science",
            cgpa: "8",
            collegeCity: "Berkeley",
            collegeState: "CA",
            graduationMonth: "August",
            graduationYear: "2023",
            schoolName: "ABC SR. SEC. SCHOOL",
            class12: { percentage: "95%" , year:"2019"},
            class10: { cgpa : "10" , year:"2017"}
          },
          experienceDetails: [
            { companyName: "Stay Great Hotels", duration: "2 years", position: "Full time employee as a Web Developer and Mobile Application engineer" },
            { companyName: "Stark Tech LLC ", duration: "3 months", position: "Worked as a Web Developer & Mobile Application Intern " }
          ],
          projects: [
            { projectName: "project1", techStack: ["a", "b", "c"], summary: "this is the summary of my project" , projectLink:"linkToMyProject" },
            { projectName: "project2", techStack: ["a", "b", "c"], summary: "this is the summary of my project" , projectLink:"linkToMyProject" },            
            { projectName: "project3", techStack: ["a", "b", "c"], summary: "this is the summary of my project" , projectLink:"linkToMyProject" }
          ],
          POR : [
              {position: "POR 1" , summary:"POR summary"},
              {position: "POR 2" , summary:"POR summary"},
              {position: "POR 3" , summary:"POR summary"}
          ],
          skills : ["C++" , "JavaScript" ,"Python", "NodeJS", "HTML" , "React" , "CSS" , "JQuery","MongoDB"] ,
          profileLinks : {
              linkedIn : "myLinkedInProfile" ,
              github : "myGitHUbProfile" 
          } ,
          achievements : ["Achievement 1" ,"Achievement 2" ,"Achievement 3" , "Achievement 4" ,"Achievement 5"] ,
          hobbies : ["hobby 1" , "hobby 2" , "hobby 3" , "hobby 4" ]
     };



    render() { 

        let {
            fname,
            lname,
            summary,
            email,
            phone,
            profession,
            houseNo,
            street,
            city,
            state,
            country,
            pin,
          } = this.state.contactDetails;
          let {
            collegeName,
            degree,
            cgpa,
            collegeCity,
            collegeState,
            graduationMonth,
            graduationYear,
            schoolName,
            class10,
            class12
          } = this.state.educationDetails;
          let experienceDetails = this.state.experienceDetails;
          let projects = this.state.projects;
          let POR = this.state.POR;
          let {linkedIn, github} = this.state.profileLinks;
          let skills = this.state.skills;
          let achievements = this.state.achievements;
          let hobbies = this.state.hobbies;
          let address = `House No. ${houseNo}, Street no. ${street}, ${city}, ${state}, ${country}, ${pin}.`;


        return ( 
            <div className="resume-skin">
                <div className="resume-left-strap">
                    {
                        skills.length
                        ?
                        <div className="skills">
                            <div className="heading">SKILLS</div>
                            <ul className="list">
                                {
                                    skills.map(skill=>{
                                        return (<li>{skill}</li>);
                                    })
                                }
                            </ul>
                        </div>
                        :
                        <div></div>
                    }

                    {
                        achievements.length 
                        ?
                            (<div className="achievements">
                            <div className="heading">ACHIEVEMENTS</div>
                            <ul className="list">
                                {
                                achievements.map(achievement=>{
                                    return (
                                    <li>{achievement}</li>
                                    );
                                }
                                )
                            }
                            </ul>
                        </div>)
                        : 
                        <div></div>
                    }
                    {
                        hobbies.length ?
                        (
                            <div className="interests">
                            <div className="heading">INTERESTS</div>
                            <ul className="list">
                                {
                                        hobbies.map(hobby=>{
                                            return (
                                            <li>{hobby}</li>
                                            );
                                        }
                                        )
                                }
    
                            </ul>
                        </div>
                        )
                        :
                        <div></div>
                    }
                   
                    <div className="contact-details">
                        <div className="heading">CONTACT</div>
                        <div className="body">    
                        <div>
                            <i className="fas fa-phone-square-alt itag"></i>
                            <div>{phone}</div>
                        </div>
                        <div>
                            <i className="fas fa-envelope itag"></i>
                            <div>{email}</div>
                        </div>
                        <div>
                            <i className="fab fa-linkedin itag"></i>
                            <div><a href="">{linkedIn}</a></div>
                        </div>
                        <div>
                            <i className="fab fa-github itag"></i>
                            <div><a href="">{github}</a></div>
                        </div>
                        <div>
                            <i className="fas fa-home itag"></i>
                            <div>{address}</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="resume-header">
                    <div className="basic-user-details">
                        <div className="user-info">
                        <div className="name">{fname} {lname}</div>
                        <div className="div-line"></div>
                        <div className="profession">{profession}</div>
                        </div>   
                        <div className="user-summary">{summary}</div>
                    </div>
                </div>
                <div className="resume-body">
                    <div className="edutation-details details">
                        <div className="heading">EDUCATION DETAILS</div>
                        <div className="content-body">
                            <div className="college-details">
                                <div className="head">{collegeName}</div>
                                <div className="subhead"> {degree}</div>
                                <div>{cgpa} CGPA</div>
                                <div>{`${graduationMonth} ${graduationYear}`}</div>
                                <div>{`${collegeCity}, ${collegeState}`}</div>
                            </div>
                            <div className="school-details">
                            <div className="head">{schoolName}</div>
                                <div className="body"><div className="subhead">Class 12{" "}</div>{` | ${class12.year} | ${class12.percentage} `} </div>
                                <div className="body"><div className="subhead">Class 10{" "}</div>{` | ${class10.year} | ${class10.cgpa} CGPA `} </div>
                            </div>
                        </div>
                    </div>
                    {
                        experienceDetails.length
                        ?
                            <div className="experience-details details">
                                <div className="heading">EXPERIENCE</div>
                                <div className="content-body">
                                    {
                                        experienceDetails.map(experience=>{
                                            return (
                                            <div className="experience">
                                                <div className="head">{experience.companyName}</div>
                                                <div>{experience.position}</div>
                                                <div>{experience.duration}</div>
                                            </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        :
                        <div></div>
                    }
                    {
                        projects.length
                        ? 
                        <div className="project-details details">
                            <div className="heading">PROJECTS</div>
                            <div className="content-body">
                                {
                                    projects.map(project=>{
                                        return (
                                        <div className="project">
                                            <div className="body">
                                                <div className="head">{project.projectName}</div>
                                                <div className="project-link"><a href="">{project.projectLink}</a></div>
                                            </div>
                                            <div className="subhead">{project.techStack}</div>
                                            <div className="summary">{project.summary}</div>
                                        </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                            :
                            <div></div>
                    }

                    {
                        POR.length 
                        ?
                        (
                        <div className="por-details details">
                            <div className="heading">POSITION OF RESPONSIBILITY</div>
                            <div className="content-body">
                            {
                                POR.map(por=>{
                                    return (
                                        <div className="por">
                                        <div className="head">{por.position}</div>
                                        <div className="summary">{por.summary}</div>
                                    </div>
                                    );
                                })
                            }
                            </div>
                        </div>
                        )
                        :
                            <div></div>
                        }
                </div>
            </div>
         );
    }
}
 
export default MySkin;