import { Link } from './Link';
import { BsGithub } from 'solid-icons/bs';
import { ImTelegram } from 'solid-icons/im';

export default function Nav() {
	return (
		<nav class="flex flex-row gap-3 items-center">
			<Link text="" href="https://t.me/maksim_kuchmaa" icon={<ImTelegram font-size="24px" />} blank={true} />
			<Link text="" href="https://github.com/kuchmaa" icon={<BsGithub font-size="24px" />} blank={true} />
		</nav>
	);
}
