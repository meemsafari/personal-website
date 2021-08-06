import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import PostItem from "../PostItem/PostItem";

const Blog = () => {

	const [posts, handlePosts] = useState([]);
	const [loading, handleLoading] = useState(false);

	const loadPosts = async () => {

		handleLoading(true);

		const response = await fetch('https://run.mocky.io/v3/b03e4ee2-2ddd-4e6f-b71b-e402311209c6');
		const posts = await response.json();

		handlePosts(posts);

		handleLoading(false);

	}

	useEffect(() => {

		loadPosts();

	}, [])

	return (
		<Layout>
			<div className="container">
				<div className="row justify-content-center pt-3 pt-md-5 pb-5">
					<div className="col-12 col-md-10">
						<h1>
							Blog
						</h1>
						<div className="row">
							{loading && <div className="col-12 text-center pt-5
							pb-5"><b>Loading...</b></div>}
							{posts.length == 0 && !loading && <div className="col-12
							text-center pt-5 pb-5">
								<div className="alert alert-info">
									No posts ...
								</div></div>}
							{posts && !loading && posts.map((item) => (
								<PostItem item={item} key={item.id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Blog;
