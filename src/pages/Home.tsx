import { useLocation } from '@solidjs/router';
import { createSignal } from 'solid-js';
import Section from '../components/Section';
import { CodeBlock, CodeLang } from '../components/Code/Code';
import { WebRunner } from '../components/Code/CodeRunner';

export default function Home() {
	const url = useLocation();
	const [value, setValue] = createSignal(0);
	const [html, setHtml] = createSignal(<h1>123</h1>);
	const [css, setCss] = createSignal('h1{color: green;}');
	const [js, setJs] = createSignal('document.getElementsByTagName("h1")[0].innerText += "hphhph";');

	return (
		<Section>
			<h1>Home: {url.pathname}</h1>
			<input type="text" value={css()} onInput={(e) => setCss(e.target.value)} />
			<button onclick={() => setValue(value() + 1)}>{value()}</button>
			{/* <input type="text" value={html()} oninput={(e) => setHtml(() => e.currentTarget.value)} /> */}
			<CodeBlock code='console.log("123");' lang="javascript" />
			<CodeBlock code="echo(123);" lang="php" />
			<WebRunner html={html} css={css} js={js} />
		</Section>
	);
}
