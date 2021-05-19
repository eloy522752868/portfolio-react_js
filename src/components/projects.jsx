import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div  className="project" style={{backgroundImage: 'url(images/EmployeeManagment.png'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://eloy522752868.github.io/employee_directory/">Employees List</a></h3>
											<span>Website</span>
											<p className="icon">
												<span><a href="https://eloy522752868.github.io/employee_directory/"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/FitnessTracker-.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">workout-tracker</a></h3>
											<span>Animation</span>
											<p className="icon">
												<span><a href="https://github.com/eloy522752868/workout-tracker"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/budgettracker.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Online Offline Budget Trackers</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="https://github.com/eloy522752868/Online-Offline-Budget-Trackers"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(https://github.com/eloy522752868/portfolio-from-scratch/blob/main/assets/images/exershare.png?raw=true)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Exershare</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="https://github.com/eloy522752868/exershare"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/techblog.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Tech-Blog</a></h3>
											<span>Website</span>
											<p className="icon">
												<span><a href="https://github.com/eloy522752868/tech-blog"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/notetaker.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Note Taker</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="https://github.com/eloy522752868/note-taker"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
