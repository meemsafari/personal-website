import React, {useEffect, useState} from "react";
import "./FeaturedWorks.scss"
import WorkItem from "../WorkItem/WorkItem";
import Loading from "../Loading/Loading";

const FeaturedWorks = () => {

	const [works, setWorks] = useState([]);
	const [loading, setLoading] = useState(false);

	const loadPosts = async () => {

		setLoading(true);

		const response = await fetch('https://run.mocky.io/v3/334f4320-dc14-4e98-a03c-d192fac3e1af');
		const list = await response.json();

		setWorks(list);

		setLoading(false);

	}

	useEffect(() => {

		loadPosts();

	}, [])

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
					{loading &&
						<div className="col-12 text-center">
							<Loading />
						</div>
					}
					{works.length > 0 && !loading && works.slice(0,4).map((item) => (
						<WorkItem item={item} key={item.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturedWorks;
