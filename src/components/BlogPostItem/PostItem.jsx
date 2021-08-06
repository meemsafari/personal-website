import React from "react";
import "./PostItem.scss";
import { Link } from "react-router-dom";

const PostItem = ({ item }) => {
	return (
		<div className="col-12 col-lg-6" key={item.id}>
			<div className="card mb-3">
				<div className="card-body">
					<div className="card-title">
						<Link to={`/blog/${item.id}`}>
							<h3>
								{item.title}
							</h3>
						</Link>
					</div>
					<ul className="post-meta">
						<li>
							{item.created_at}
						</li>
						<li>
							{item['tags'].map((tag) => (
								<span className="badge badge-danger">
									{tag.title}
								</span>
							))}
						</li>
					</ul>
					<p>
						{item.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default PostItem;
