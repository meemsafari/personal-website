import React from "react";
import "./WorkItem.scss";

const WorkItem = ({ item }) => {
	return (
		<div className="row article m-0 pt-2 pb-2">
			<div className="col-12 col-md-3 ml-0 image-wrapper">
				<img src={item.image} alt={item.title} />
			</div>
			<div className="col-12 col-md-9">
				<h3>
					{item.title}
				</h3>
				<ul className="work-meta">
					<li>
						<span className="badge badge-primary">
							{item.year}
						</span>
					</li>
					<li className="category">
						{item.category}
					</li>
				</ul>
				<p>
					{item.description}
				</p>
			</div>
		</div>
	)
}

export default WorkItem;
