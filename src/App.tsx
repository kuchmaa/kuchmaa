import { Route, Router } from '@solidjs/router';
import Home from './pages/Home';
import Test from './pages/Test';
import { IoHome } from 'solid-icons/io';
import Link from './components/Link';
// import './App.css'

const base = import.meta.env.DEV ? undefined : '/kuchmaa';
console.log(base);

function App() {
  return (
    <>
      <header class="h-14 flex flex-row items-center justify-center">
        <div class="container">
          <a href="/" class="size-9" aria-details="Go to home page">
            Kuchmaa
          </a>
          <nav>
            <Link href="/test" text="Test" icon={<IoHome font-size="21px" />} />
          </nav>
        </div>
      </header>

      <Router base={base}>
        <Route path="/" component={Home} />
        <Route path="/test" component={Test} />
      </Router>
    </>
  );
}

export default App;
