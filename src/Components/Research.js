import React, { Component } from 'react';

class Research extends Component {
  render() {

    if(this.props.data){
      var research = this.props.data.research.map(function(research){
        return  <li key={research.user}>
            <blockquote>
               <h3>{research.subject}</h3>
               <p>{research.text}</p>
               {/* <cite>{research.user}</cite> */}
            </blockquote>
         </li>
      })
    }

    return (
      <section id="research">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Research</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {research}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Research;
