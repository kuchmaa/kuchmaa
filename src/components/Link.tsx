import type { JSXElement } from 'solid-js';

export default function Link({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon?: JSXElement;
}) {
  return (
    <a
      href={href}
      class="flex flex-row items-top gap-1 text-gray-300 hover:text-gray-500"
    >
      {icon ?? ''}
      {text}
    </a>
  );
}
