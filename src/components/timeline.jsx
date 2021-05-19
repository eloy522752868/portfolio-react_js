import React, { Component } from 'react'
//Modified By: Eloy Gonzalez
//Modified date: 05/18/2021
//This is timeline, includes my resume and recent jobs.
export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">WORK EXPERIENCE</h2>
                <div className="timeline-icon color-3">
              
                      </div>
                      <div className="timeline-label">
                      <h4><span  role="img" ><i class="icon-file"></i> </span>Resume details <a className="resume" id = "resume-detail" href="https://eloy522752868.github.io/portfolio-from-scratch/assets/images/Eloy%20Gonzalez%202021%20Resume.pdf" target="_blank" rel="noopener noreferrer">click here</a></h4>
                      </div>
               
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>J.M. HUBER CORPORATION <span>Aug 2006 – Oct 2020</span></h2>
                        <p>Promoted multiple times with increasing leadership responsibility, serving as a vital member of the software 
development team. Provides ongoing support to CCR HEM.order integrations and applications. Recognized for 
leading the team in completing multiple strategic initiatives.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>AIG AGENCY AUTO – Atlanta, GA <span>March 2004 – Aug 2006</span></h2>
                        <p>Challenged to work collaboratively with clients and the implementation team to gather and interpret user and 
system requirements into design specifications. Researched, evaluated, and recommended solutions and 
appropriate technology to meet the client’s application needs</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
