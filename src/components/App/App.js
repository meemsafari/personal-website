import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "../About/About";
import Works from "../Works/Contact";
import Contact from "../Works/Contact";
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
