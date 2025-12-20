import { createSignal } from 'solid-js';
import Nav from './Nav';

export default function Header() {
	const [scroll, setScroll] = createSignal(false);
	document.addEventListener(
		'scroll',
		() => {
			const pos = document.body.getBoundingClientRect().top;
			if (pos < -20) {
				scroll() == false && setScroll(true);
			} else {
				scroll() == true && setScroll(false);
			}
		},
		{
			passive: true,
		}
	);
	return (
		<header
			class={`h-14 flex  items-center bg-gray-950 ${
				scroll() ? 'shadow shadow-gray-800' : ''
			} justify-center p-2 sticky top-0`}
		>
			<div class="container flex flex-row justify-between">
				<a href="/" class="flex size-9" aria-details="Go to home page">
					Kuchmaa
				</a>
				<Nav />
			</div>
		</header>
	);
}
