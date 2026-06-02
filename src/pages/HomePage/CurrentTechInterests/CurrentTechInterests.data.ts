import imgClaudeCode from '~images/interests/claude-code.jpg';
import imgFirebase from '~images/interests/firebase.jpg';
import imgReactNative from '~images/interests/react-native.jpg';

export type InterestItem = {
	desc: string[];
	img: string;
	title: string;
};

export const CURRENT_TECH_INTERESTS: InterestItem[] = [
	{
		desc: [
			"Claude is a vital part of my development workflow. It accelerates boilerplate, assists with debugging, and helps explore architectural decisions. Through this, I'm learning to collaborate effectively with AI tooling, including Claude Code.",
			'Beyond just writing code faster, it’s been a great experience learning how to collaborate effectively with next-gen AI tooling, including Claude Code, to stay sharp and efficient.',
		],
		img: imgClaudeCode,
		title: 'AI-Assisted Development with Claude',
	},
	{
		desc: [
			'What I love about React Native is that I can dive right into building actual iOS and Android apps using the exact same React skills I already use on the web. Rather than running in a browser, my code renders real native UI component. That means my apps actually look and feel like they belong on your phone.',
			"As a web developer with a passion for building things outside of work, React Native is a natural next step. I'm exploring it through my Hoki Skateboards app project, where the goal is to ship something real and learn by doing.",
		],
		img: imgReactNative,
		title: 'React Native',
	},
	{
		desc: [
			'Honestly, I was pretty hyped to dive into a document database for this project. Since I was working with simple JSON data, storing documents in their natural format without worrying about strict schemas or painful migrations was amazing. It has been nice to just build and iterate fast without the SQL overhead.',
			'As someone who primarily lives on the front end, Firebase fills a meaningful gap. It lets me build full-featured apps independently, handling the backend complexity so I can stay focused on the experience. It pairs naturally with both React and React Native.',
		],
		img: imgFirebase,
		title: 'Firebase',
	},
];
