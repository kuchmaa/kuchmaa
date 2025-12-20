import type { JSXElement } from 'solid-js';

export default function Section({ children }: { children: JSXElement[] }) {
  return (
    <section class="p-2 flex flex-col items-center">
      <div class="container">{children}</div>
    </section>
  );
}
