import { useLocation } from '@solidjs/router';

export default function Test() {
  const url = useLocation();
  return <h1>Test {url.pathname}</h1>;
}
