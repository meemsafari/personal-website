import React, { useState, useEffect, useCallback } from "react";
import Layout from "../Layout/Layout";
import PostItem from "../BlogPostItem/PostItem";
import Loading from "../Loading/Loading";

const Blog = () => {

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageCounts, setPageCounts] = useState(0);
	const [activePageNumber, setActivePageNumber] = useState(1);

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

	useEffect(() => {

		setPageCounts(calculatePageCounts());

	}, [posts])

	const calculatePageCounts = () => {

		if ( posts.length % 6 > 0 ) {

			return parseInt(posts.length / 6 + 1);

		} else {

			return parseInt(posts.length / 6 );

		}

	}

	const handleClickOnPages = useCallback((pageNumber) => {

		setActivePageNumber(pageNumber);

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
							pb-5"><Loading /></div>}
							{posts.length == 0 && !loading && <div className="col-12
							text-center pt-5 pb-5">
								<div className="alert alert-info">
									No posts ...
								</div></div>}
							{posts.length > 0 && !loading && posts.slice(6 * (activePageNumber - 1), 6 * activePageNumber).map((item) => (
								<PostItem item={item} />
							))}
						</div>
						<div className="row">
							<div className="col-12">
								<nav aria-label="...">
									<ul className="pagination justify-content-center">
										{new Array(pageCounts).fill(0).map((item, index) => (
											<li onClick={() => handleClickOnPages(index + 1)}
												className={`page-item ${activePageNumber == index + 1 ? 'active' : ''}`} aria-current="page" key={index}>
												<span className="page-link">
													{ index + 1 }
												</span>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Blog;
