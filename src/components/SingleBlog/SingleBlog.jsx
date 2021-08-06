import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Link, useParams } from 'react-router-dom';

const SingleBlog = () => {

	const { id } = useParams();

	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState({});

	const loadPosts = async () => {

		setLoading(true);

		const response = await fetch('https://run.mocky.io/v3/b03e4ee2-2ddd-4e6f-b71b-e402311209c6');
		const list = await response.json();

		setPosts(list)

	}

	useEffect(() => {

		loadPosts();

	}, [])

	useEffect(() => {

		if (posts.length > 0) {
			setPost(posts.find(item => parseInt(item.id) === parseInt(id)));
			setLoading(false);
		}

	}, [posts])

	return (
		<Layout>
			<div className="container">
				{loading &&
					<div className="row">
						<div className="col-12 text-center pt-5 pb-5">
							<b>
								Loading...
							</b>
						</div>
					</div>
				}
				{!post && !loading &&
					<div className="row justify-content-center pt-3 pt-md-5 pb-5">
						<div className="col-12 col-md-10">
							<div className="alert alert-info">
								No Data ...
								<Link to="/">
									Homepage
								</Link>
							</div>
						</div>
					</div>
				}
				{post && !loading &&
					<div className="row justify-content-center pt-3 pt-md-5 pb-5">
						<div className="col-12 col-md-10">
							{post.title &&
								<h1>
									{post.title}
								</h1>
							}
							{post.description &&
								<p>
									{post.description}
								</p>
							}
						</div>
					</div>
				}
			</div>
		</Layout>
	)
}

export default SingleBlog;
