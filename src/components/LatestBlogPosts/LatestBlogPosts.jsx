import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./LatestBlogPosts.scss"
import PostItem from "../BlogPostItem/PostItem";

const LatestBlogPosts = () => {

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const loadPosts = async () => {

		setLoading(true);

		const response = await fetch('https://run.mocky.io/v3/b03e4ee2-2ddd-4e6f-b71b-e402311209c6');
		const posts = await response.json();

		setPosts(posts);

		setLoading(false);

	}

	useEffect(() => {

		loadPosts();

	}, [])

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
						<Link className="view-more inline-middle" to="/blog">
							View all
						</Link>
					</div>
				</div>
				<div className="row">
					{loading && <div className="col-12 text-center pt-5
							pb-5"><b>Loading...</b></div>}
					{posts.length == 0 && !loading && <div className="col-12
							text-center pt-5 pb-5">
						<div className="alert alert-info">
							No posts ...
						</div></div>}
					{posts && !loading && posts.slice(0,2).map((item) => (
						<PostItem item={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default LatestBlogPosts;
