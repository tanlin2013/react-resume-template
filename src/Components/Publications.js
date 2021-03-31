import React, { Component } from 'react';

class Publications extends Component {
  render() {

    if(this.props.data){
      var bibsource = "files/"+this.props.data.bibsource;
      
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.js";
      script.async = true;
      document.body.appendChild(script);
    }  

    return (
      <section id="publications">

        <bibtex src={bibsource}></bibtex>

        <div className="row section-head">

          <div className="two columns header-col">
            <h1><span>Publications</span></h1>
          </div>
        
          <div className="ten columns">

            <div class="bibtex_structure">
              <div class="sections bibtextypekey">
                <div class="section article">
                  <h1>Journal Articles</h1>
                  <div class="sort year" extra="ASC number">
                    <div class="templates"></div>
                  </div>
                </div>
                <div class="section book">
                  <h1>Books</h1>
                  <div class="sort year" extra="ASC number">
                    <div class="templates"></div>
                  </div>
                </div>
                <div class="section inproceedings">
                  <h1>Conference Proceedings</h1>
                  <div class="sort year" extra="ASC number">
                    <div class="templates"></div>
                  </div>
                </div>
                <div class="section misc|phdthesis|mastersthesis|bachelorsthesis|techreport">
                  <h1>Other Publications</h1>
                  <div class="sort year" extra="ASC number">
                    <div class="templates"></div>
                  </div>
                </div>
              </div>
            </div>
                
                
            <div id="bibtex_display">

              <div class="bibtex_template">
                <ul> <li>
                  <span class="if title">
                    <a class="url">
                        <span class="title"></span>,
                    </a>
                  </span>
                  <div class="if author">
                    <span class="author"></span>
                  </div>
                  <div>
                    <span class="if journal"><em><span class="journal"></span></em></span>
                    <span class="if month"><span class="month"></span>,</span>
                    <span class="if year"><span class="year"></span>.</span>
                  </div>
                </li></ul>
              </div>

            </div>

          </div>

        </div>

      </section>
    );
  }
}

export default Publications;
