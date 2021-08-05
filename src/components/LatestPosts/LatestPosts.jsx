import React from "react";
import {Link} from "react-router-dom";
import "./LatestPosts.scss"
import PostItem from "../PostItem/PostItem";
import POSTS from "../App/POSTS.json"

const LatestPosts = () => {
	return (
		<section className="bg-light-blue pt-3 pb-3 pb-md-5">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<h4>
							Recent posts
						</h4>
					</div>
					<div className="col-6 text-end">
						<Link className="view-more" to="/blog">
							View all
						</Link>
					</div>
				</div>
				<div className="row">
					{POSTS.map((item) => (
						<PostItem item={item} key={item.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LatestPosts;
