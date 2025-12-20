import type { JSXElement } from 'solid-js';

interface LinkProps {
	href: string;
	text: string;
	icon: JSXElement;
	active?: boolean;
	blank?: boolean;
}

export function Link({ href, text, icon, active = false, blank = false }: LinkProps) {
	return (
		<a
			href={href}
			target={blank ? '_blank' : '_self'}
			class={`flex flex-row items-top gap-1 ${
				active ? 'text-blue-600' : 'text-gray-300'
			} hover:text-gray-500 active:bg-blue-600`}
		>
			{icon ?? ''}
			{text}
		</a>
	);
}
export function LinkTextAnim({ href, text, icon, active, blank }: LinkProps) {
	return (
		<a
			href={href}
			target={blank ? '_blank' : '_self'}
			class={`flex flex-row items-top gap-1 ${
				active ? 'text-blue-600' : 'text-gray-300'
			} hover:text-gray-500 active:bg-blue-600 in-hover:only`}
		>
			{icon ?? ''}
			<span>{text}</span>
		</a>
	);
}
