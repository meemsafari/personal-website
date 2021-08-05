import React from "react";
import './Header.scss'
import {Link, useLocation} from "react-router-dom";

const Header = () => {
	const location = useLocation();
	return (
		<div className="container">
			<header>
				<div className="row">
					<div className="col-12 col-md-4">
						<h1>
							<Link to="/">
								Mahdi Safari
							</Link>
						</h1>
					</div>
					<div className="col-12 col-md-8">
						<nav>
							<ul className="nav justify-content-center justify-content-md-end">
								<li className="nav-item">
									<Link className={'nav-link ' + (location.pathname === '/' && 'active')} to="/">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className={'nav-link ' + (location.pathname === '/works' && 'active')} to="/works">
										Works
									</Link>
								</li>
								<li className="nav-item">
									<Link className={'nav-link ' + (location.pathname === '/about' && 'active')} to="/about">
										About
									</Link>
								</li>
								<li className="nav-item">
									<Link className={'nav-link ' + (location.pathname === '/blog' && 'active')} to="/blog">
										Blog
									</Link>
								</li>
								<li className="nav-item">
									<Link className={'nav-link ' + (location.pathname === '/contact' && 'active')} to="/contact">
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header;
