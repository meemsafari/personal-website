import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import Home from "../Home/Home";
import Works from "../Works/Works";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import SingleBlog from "../SingleBlog/SingleBlog";

function App() {
  return (
    <div className="App">
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/works">
						<Works />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route exact path="/blog">
						<Blog />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/blog/:id">
						<SingleBlog />
					</Route>
				</Switch>
			</div>
		</Router>
    </div>
  );
}

export default App;
