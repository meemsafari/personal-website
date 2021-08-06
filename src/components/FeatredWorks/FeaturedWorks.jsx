import React from "react";
import "./FeaturedWorks.scss"
import WORKS from "../App/WORKS.json"
import WorkItem from "../WorkItem/WorkItem";

const FeaturedWorks = () => {
	return (
		<section className="pt-2 pb-3 pb-md-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-9">
						<h4>
							Featured works
						</h4>
					</div>
				</div>
				<div className="row justify-content-center">
					{WORKS.map((item) => (
						<WorkItem item={item} key={item.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturedWorks;
