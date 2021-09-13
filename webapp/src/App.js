import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Profile from './components/Profile';
import Ide from './components/Ide';
import Chatroom from './components/Chatroom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path = "/profile">
					<Profile />
				</Route>
				<Route path = "/ide">
					<Ide />
				</Route>
				<Route path = "/chatroom">
					<Chatroom />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
