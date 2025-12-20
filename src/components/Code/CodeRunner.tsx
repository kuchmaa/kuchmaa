import type { Accessor, JSXElement } from 'solid-js';

interface RunnerProps {
	html: Accessor<JSXElement>;
	css: Accessor<string>;
	js: Accessor<string>;
}

export function WebRunner({ html, css, js }: RunnerProps) {
	// const page = ;

	return (
		<iframe
			title="preview"
			sandbox="allow-scripts allow-modals"
			srcdoc={`
    <!doctype html>
    <html>
      <head><meta charset="utf-8">
        <style>${css()}</style>
      </head>
      <body>
        ${html().outerHTML}
        <script>
        document.body.append()
          const oldConsole = console.log;

          try { ${js()} } catch (e) { console.error(e); }
        </script>
      </body>
    </html>
  `}
			class="w-full h-[400px] border"
		/>
	);
}
