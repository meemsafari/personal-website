import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";

function App() {
  return (
    <div className="App">
		<Router>
			<div>
				<Switch>
					<Route path="/works">
						<Works />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
    </div>
  );
}

export default App;
