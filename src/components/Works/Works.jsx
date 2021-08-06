import React, {useCallback, useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import WorkItem from "../WorkItem/WorkItem";
import Loading from "../Loading/Loading";

const Works = () => {

	const [works, setWorks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageCounts, setPageCounts] = useState(0);
	const [activePageNumber, setActivePageNumber] = useState(1);

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

	useEffect(() => {

		setPageCounts(calculatePageCounts());

	}, [works])

	const calculatePageCounts = () => {

		if ( works.length % 6 > 0 ) {

			return parseInt(works.length / 6 + 1);

		} else {

			return parseInt(works.length / 6 );

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
							Works
						</h1>
						<div className="row">
							{loading &&
							<div className="col-12 text-center">
								<Loading />
							</div>
							}
							{works.length > 0 && !loading && works.slice(6 * (activePageNumber - 1), 6 * activePageNumber).map((item) => (
								<WorkItem item={item} />
							))}
						</div>
					</div>
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
		</Layout>
	)
}

export default Works;
