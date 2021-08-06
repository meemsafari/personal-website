import React from "react";
import "./WorkItem.scss";

const WorkItem = ({ item }) => {
	return (
		<div className="col-12 col-md-9">
			<div className="row work-item pt-2 pb-2 text-center text-md-start justify-content-center">
				<div className="col-12 col-md-4 image-wrapper">
					<img className="mb-2 mb-md-0" src={item.image} alt={item.title} />
				</div>
				<div className="col-12 col-md-8">
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
		</div>
	)
}

export default WorkItem;
