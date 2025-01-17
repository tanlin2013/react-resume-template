import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div className="education" key={education.degree}><h3>{education.degree}</h3>
        <p className="info"><em className="date"><i class="fa fa-calendar">&nbsp;</i> {education.graduated}&nbsp;</em> <i class="fa fa-map-marker">&nbsp;</i> {education.school}</p>
        {/* <p className="thesis">{education.thesis}</p> */}
        {/* <p className="thesis">Advisor: {education.advisor}</p> */}
        <p className="description">{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div className="work" key={work.title}><h3>{work.title}</h3>
            <p className="info"><em className="date"><i class="fa fa-calendar">&nbsp;</i> {work.years}&nbsp;</em> <i class="fa fa-map-marker">&nbsp;</i> {work.company}</p>
            <p className="description">{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="bio">

      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work Experience</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>


      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				  <div className="bars">
				     <ul className="skills">
					    {skills}
					  </ul>
				  </div>
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;
