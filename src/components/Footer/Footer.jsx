import React from "react";
import {FaLinkedin, FaTwitter} from "react-icons/fa";
import './Footer.scss'

const Footer = () => {
	return (
		<div className="container">
			<footer>
				<div className="row">
					<div className="col-12 text-center">
						<ul className="social-icons list-unstyled">
							<li>
								<a href="https://twitter.com/meemsafari" rel="noreferrer" target="_blank">
									<FaTwitter />
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/meemsafari" rel="noreferrer" target="_blank">
									<FaLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<p className="copyright">
							Copyright ©2021 All rights reserved
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer;
