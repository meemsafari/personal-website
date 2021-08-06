import React from "react";
import Layout from "../Layout/Layout";
import Intro from "../Intro/Intro";
import LatestBlogPosts from "../LatestBlogPosts/LatestBlogPosts";
import FeaturedWorks from "../FeatredWorks/FeaturedWorks";

const Home = () => {
	return (
		<Layout>
			<Intro />
			<LatestBlogPosts />
			<FeaturedWorks />
		</Layout>
	)
}

export default Home;
