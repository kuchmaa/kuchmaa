import { Route, Router } from '@solidjs/router';
import Home from './pages/Home';
import Test from './pages/Test';
import Header from './components/Header';

const base = import.meta.env.DEV ? undefined : '/kuchmaa';

function App() {
	return (
		<>
			<Header />
			<Router base={base}>
				<Route path="/" component={Home} />
				<Route path="/test" component={Test} />
			</Router>
		</>
	);
}

export default App;
