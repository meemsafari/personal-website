import React from "react";
import "./PostItem.scss";

const PostItem = ({ item }) => {
	return (
		<div className="col-12 col-md-6" key={item.id} >
			<div className="card">
				<div className="card-body">
					<div className="card-title">
						<h3>
							{item.title}
						</h3>
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
