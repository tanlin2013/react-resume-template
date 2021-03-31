import React, { Component } from 'react';

class Publications extends Component {
  render() {

    if(this.props.data){
      var bibsource = "files/"+this.props.data.bibsource;
    }

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.js";
    script.async = true;
    document.body.appendChild(script);

    return (
      <section id="publications">

        <bibtex src={bibsource}></bibtex>
        
        <div className="row section-head">

          <div className="two columns header-col">
            <h1><span>Publications</span></h1>
          </div>
          
          <div className="ten columns">
            <div id="bibtex_display"></div>
          </div>

        </div>

      </section>
    );
  }
}

export default Publications;
