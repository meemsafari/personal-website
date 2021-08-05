import React from "react";
import Layout from "../Layout/Layout";
import WORKS from "../App/WORKS.json";
import WorkItem from "../WorkItem/WorkItem";

const Works = () => {
	return (
		<Layout>
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-12 col-md-9">
						<h1>
							Works
						</h1>
						<div className="row">
							{WORKS.map((item) => (
								<WorkItem item={item} key={item.id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Works;
