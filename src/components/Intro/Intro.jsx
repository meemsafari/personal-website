import React from "react";
import './Intro.scss'
import me from './me.png';

const Intro = () => {
	return (
		<div className="row pt-3 pt-md-5 pb-5 justify-content-center">
			<div className="col-10 col-md-6 order-1 order-md-0">
				<h2 className="mb-4 text-center text-md-start">
					Hi, I am Mahdi,
					<br/>
					FrontEnd Developer
				</h2>
				<p className="mb-4 text-center text-md-start">
					I am a FrontEnd developer with industry experience building
					websites and web applications. I specialize in JavaScript and have
					professional experience working with Angular. I also have experience
					working with ReactJS and VueJS.
				</p>
				<button className="btn btn-danger">
					Download resume
				</button>
			</div>
			<div className="col-12 col-md-6 order-0 order-md-1 text-center">
				<img src={me}
					 className="rounded-circle mb-3" alt="Mahdi Safari"/>
			</div>
		</div>
	)
}

export default Intro;
