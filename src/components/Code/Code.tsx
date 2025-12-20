// src/components/CodeBlock.tsx
import { onMount } from 'solid-js';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import 'highlight.js/styles/github-dark-dimmed.css'; // выбери тему

export enum CodeLang {
	php = 'php',
	js = 'javascript',
}
type CodeLangType = `${CodeLang}`;

// Регистрируем только JS
hljs.registerLanguage(CodeLang.js, javascript);
hljs.registerLanguage(CodeLang.php, php);

export function CodeBlock(props: { code: string; lang?: CodeLangType }) {
	let preEl!: HTMLPreElement;

	onMount(() => {
		const codeEl = preEl.querySelector('code');
		if (codeEl) {
			hljs.highlightElement(codeEl);
		}
	});

	return (
		<pre ref={preEl}>
			<code class={`language-${props.lang ?? 'javascript'} rounded-2xl`}>{props.code}</code>
		</pre>
	);
}
