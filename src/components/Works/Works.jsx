import React from "react";
import Layout from "../Layout/Layout";
import WORKS from "../App/WORKS.json";
import WorkItem from "../WorkItem/WorkItem";

const Works = () => {
	return (
		<Layout>
			<div className="container">
				<div className="row justify-content-center pt-3 pt-md-5 pb-5">
					<div className="col-12 col-md-10">
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
