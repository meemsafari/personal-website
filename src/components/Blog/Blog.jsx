import React, {useState, useEffect} from "react";
import Layout from "../Layout/Layout";
import POSTS from "../App/POSTS.json";
import PostItem from "../PostItem/PostItem";

const Blog = () => {

	const [posts, handlePosts] = useState([]);
	const [loading, handleLoading] = useState(false);

	useEffect(() => {

		handleLoading(true);
		handlePosts(POSTS); // ToDo: need use API
		handleLoading(false);

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
							{/* ToDo: me: Make component for loading */}
							{loading && <div className="col-12 text-center pt-5
							pb-5">loading</div>}
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
