import React, { Component } from 'react'
//Modified By: Eloy Gonzalez
//Modified date: 05/18/2021
//This is project and has my current projects.
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
								<h5 className= "text-muted">- mouse over project for details -</h5>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(https://wallsdesk.com/wp-content/uploads/2016/11/Google-Images.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">google-books-search</a></h3>
											<span>Website</span>
											<p>In this activity, I create a new React-based Google Books Search app. It required you to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Also use Node, Express and MongoDB so that users can save books to review or purchase later.</p>
											<p className="icon">
												<span><a href="https://eg-google-books-search.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> website</a></span>
												<span><a href="https://github.com/eloy522752868/google-books-search" target="_blank" rel="noopener noreferrer"> <i className="icon-github" /> repo</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div  className="project" style={{backgroundImage: 'url(images/EmployeeManagment.png'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Employee Directory</a></h3>
											<span>Website</span>
											<p>Created a employee directory with React. This required to break up your application's UI into components, manage component state, and respond to user events.</p>
											<p className="icon">
												<span><a href="https://eloy522752868.github.io/employee_directory/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> website</a></span>
												<span><a href="https://github.com/eloy522752868/employee_directory" target="_blank"  rel="noopener noreferrer" ><i className="icon-github" /> repo</a></span>
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
											<span>Website</span>
											<p>The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.</p>
											<p className="icon">
												<span><a href="https://frozen-chamber-22128.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><i className="icon-share3" /> website</a></span>
												<span><a href="https://github.com/eloy522752868/Online-Offline-Budget-Trackers" target="_blank"  rel="noopener noreferrer"><i className="icon-github" /> repo</a></span>
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
											<span>Website</span>
											<p>Our project is an interactive and responsive application that allows a user to select from different categories of exercises and choose which ones they would like to do. They can then also share whichever exercises they like best with other people in their community.</p>
											<p className="icon">
												<span><a href="https://warm-stream-03469.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> website</a></span>
												<span><a href="https://github.com/eloy522752868/exershare" target="_blank" rel="noopener noreferrer" ><i className="icon-github" /> repo</a></span>
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
											<p>On this project is to build a CMS-style blog site similar to a Wordpress site. The app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
											<p className="icon">
											<span><a href="https://gentle-oasis-28025.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> website</a></span>
												<span><a href="https://github.com/eloy522752868/tech-blog/" target="_blank" rel="noopener noreferrer" ><i className="icon-github" /> repo</a></span>
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
											<span>Website</span>
											<p>In this project I create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
											<p className="icon">
											<span><a href="https://rocky-beyond-38291.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /> website</a></span>
											<span><a href="https://github.com/eloy522752868/note-taker" target="_blank" rel="noopener noreferrer" ><i className="icon-github" /> repo</a></span>
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
