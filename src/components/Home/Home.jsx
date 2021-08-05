import React from "react";
import Layout from "../Layout/Layout";
import Intro from "../Intro/Intro";
import LatestPosts from "../LatestPosts/LatestPosts";
import FeaturedWorks from "../FeatredWorks/FeaturedWorks";

const Home = () => {
	return (
		<Layout>
			<Intro />
			<LatestPosts />
			<FeaturedWorks />
		</Layout>
	)
}

export default Home;
