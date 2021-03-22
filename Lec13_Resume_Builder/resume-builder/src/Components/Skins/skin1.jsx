import React, { Component } from "react";
import "./skin1.css";
class Skin1 extends Component {
  state = {
    contactDetails: {
      fname: "Ishika",
      lname: "Goel",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni, perspiciatis,placeat quidem ipsum officiis, nemo mollitia optio labore hic maiores repudiandae est debitis inventore vel pariatur deleniti? Obcaecati, odit!",
      email: "ishikagoel@gmail.com",
      phone: "+91 7537285630",
      profession: "Software Engineer",
      street: "Kavi nagar",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      country: "India",
      pin: "201001",
    },
    educationDetails: {
      collegeName: "Indira Gandhi Delhi Technical University for Women",
      degree: "Bachelor of Technology in Computer Science",
      cgpa: "8.5",
      collegeCity: "New Delhi",
      collegeState: "Delhi",
      collegeCountry: "India",
      duration: "2018 - 2022",
    },
    experienceDetails: [
      {
        companyName: "Google",
        duration: "June 2019 - July 2019",
        position: "Software Engineer Intern",
        role:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
      },
      {
        companyName: "Microsoft",
        duration: "June 2020 - July 2020",
        position: "Software Engineer Intern",
        role:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
      },
      {
        companyName: "Deutsche Bank",
        duration: "June 2021 - July 2021",
        position: "Software Engineer Intern",
        role:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
      },
    ],
    projects: [
      {
        projectName: "Project 1",
        techStack: ["ahjfex", "fdghuij", "vsfajgkhj"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi, repellat similique enim ipsum laudantium reiciendis voluptates, deleniti pariatur, excepturi aspernatur nihil minima repellendus a ad.",
        projectLink: "www.gxdefyb.com",
      },
      {
        projectName: "Project 2",
        techStack: ["rehjk", "wetyfug", "dsfghvjbn"],
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, id. Minus quia libero nesciunt. Quas, sed neque cum molestiae consectetur magnam omnis dolore corrupti nam laboriosam nostrum vero, assumenda minus!",
        projectLink: "www.tewghio.com",
      },
      {
        projectName: "Project 3",
        techStack: ["qewrfyguh", "rdftygu", "dfg"],
        summary:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quis vero commodi beatae, temporibus itaque alias? Rerum repudiandae nesciunt quos quae, quasi sequi repellat commodi eligendi.",
        projectLink: "www.fegyuh.com",
      },
    ],
    skills: {
      language: ["C/C++", "Java", "Javascript"],
      frameworks: ["ceay", "xqehgrt", "zrtqyu"],
      software: ["ev3y2qj", "e23vg", "3v2hz1"],
      ide: ["wyixl", "q2zdfgh", "zwscj"],
    },
    profileLinks: {
      linkedIn: "www.linkedin.com/ishikegoel",
      github: "www.github.com/ishikagoel",
    },
    achievements: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam vero doloremque cumque molestiae, adipisci, sint quod consequatur cupiditate fuga veritatis nemo aperiam. Quasi, incidunt laudantium.",
    ],
    hobbies: [
      "xquvyutyiomqz hgqwefh",
      "yavjuwtbhzqd",
      "zqfiuykewiql",
      "zqerc",
      "zqfjyuzq zqfdjtyfmjg",
    ],
  };
  render() {
    let {
      fname,
      lname,
      summary,
      email,
      phone,
      profession,
      street,
      city,
      state,
      country,
      pin,
    } = this.props.contactDetails ? this.props.contactDetails : this.state.contactDetails;
    
    let {
      collegeName,
      degree,
      cgpa,
      collegeCity,
      collegeState,
      collegeCountry
    } = this.props.educationDetails ? this.props.educationDetails : this.state.educationDetails;


    let experienceDetails = this.state.experienceDetails;
    let projects = this.state.projects;
    let skills = this.state.skills;
    let profileLinks = this.state.profileLinks;
    let achievements = this.state.achievements;
    let hobbies = this.state.hobbies;
    return (
      <div ref={this.props.refProp} className="resume-skin">
        <div className="skin-top">
          <div className="user-heading">
            <div className="user-name">
              {(fname + " " + lname).toUpperCase()}
            </div>
            <div className="user-profession">{profession.toUpperCase()}</div>
          </div>
        </div>
        <div className="skin-body">
          <div className="skin-left">
            <div className="left-section">
              <div className="left-heading">SKILLS</div>
              <div className="left-sub-section">
                <div className="left-sub-heading">LANGUAGES</div>
                <ul className="list">
                  {skills.language.map((language) => {
                    return <li className="left-body">{language}</li>;
                  })}
                </ul>
              </div>
              <div className="left-sub-section">
                <div className="left-sub-heading">FRAMEWORKS</div>
                <ul className="list">
                  {skills.frameworks.map((framework) => {
                    return <li className="left-body">{framework}</li>;
                  })}
                </ul>
              </div>
              <div className="left-sub-section">
                <div className="left-sub-heading">SOFTWARES</div>
                <ul className="list">
                  {skills.software.map((soft) => {
                    return <li className="left-body">{soft}</li>;
                  })}
                </ul>
              </div>
              <div className="left-sub-section">
                <div className="left-sub-heading">IDE</div>
                <ul className="list">
                  {skills.ide.map((singleIde) => {
                    return <li className="left-body">{singleIde}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="left-section">
              <div className="left-heading">CONTACT</div>
              <div className="left-body">{email}</div>
              <div className="left-body">{phone}</div>
              <div className="left-body">
                {street +
                  ", " +
                  city +
                  ", " +
                  state +
                  ", " +
                  country +
                  ", " +
                  pin}
              </div>
            </div>
            <div className="left-section">
              <div className="left-heading">PROFILE LINKS</div>
              <div className="left-body">{profileLinks.linkedIn}</div>
              <div className="left-body">{profileLinks.github}</div>
            </div>
            <div className="left-section">
              <div className="left-heading">HOBBIES</div>
              <ul className="list">
                {hobbies.map((hobby) => {
                  return <li className="left-body">{hobby}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="skin-right">
            <div className="right-section">
              <div className="right-heading">PROFILE</div>
              <div className="right-body">{summary}</div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">EXPERIENCE</div>
              <div className="right-sub-section">
                {experienceDetails.map((experience) => {
                  return (
                    <div className="user-company right-sub-section">
                      <div className="right-sub-heading">
                        {experience.position.toUpperCase()}
                      </div>
                      <div className="right-sub-heading-light">
                        {experience.companyName + " | " + experience.duration}
                      </div>
                      <div className="right-body">{experience.role}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">EDUCATION</div>
              <div className="right-sub-heading">{degree.toUpperCase()}</div>
              <div className="right-sub-heading-light">
                {collegeName +
                  ", " +
                  collegeCity +
                  ", " +
                  collegeState +
                  ", " +
                  "CGPA : " +
                  cgpa }
              </div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">PROJECTS</div>
              <div className="right-sub-section">
                {projects.map((project) => {
                  return (
                    <div className="right-sub-section">
                      <div className="right-sub-heading">
                        {project.projectName + " | " + project.projectLink}
                      </div>
                      <div className="right-sub-sub-section">
                        <div className="single-line-list">
                          <div className="right-body">TECH STACK USED :</div>
                          <ul className="list single-line-list">
                            {project.techStack.map((techStack) => {
                              return (
                                <li className="right-body single-line-list-item">
                                  {techStack}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="right-body">{project.summary}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="line"></div>
            <div className="right-section">
              <div className="right-heading">ACHIEVEMENTS</div>
              <ul className="list">
                {achievements.map((achievement) => {
                  return <li className="right-body">{achievement}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Skin1;
