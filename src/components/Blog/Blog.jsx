import React from "react";
import Layout from "../Layout/Layout";
import POSTS from "../App/POSTS.json";
import PostItem from "../PostItem/PostItem";

const Blog = () => {
	return (
		<Layout>
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-12 col-md-9">
						<h1>
							Blog
						</h1>
						<div className="row">
							{POSTS.map((item) => (
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
