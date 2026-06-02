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
		],
		img: imgClaudeCode,
		title: 'AI-Assisted Development with Claude',
	},
	{
		desc: [
			'React Native allows you to build truly native mobile apps for iOS and Android using the same React skills used for the web. Rather than running in a browser, it renders real native UI components. This gives apps the look and feel users expect on their platform.',
			"As a web developer with a passion for building things outside of work, React Native is a natural next step. I'm exploring it through my Hoki Skateboards app project, where the goal is to ship something real and learn by doing.",
		],
		img: imgReactNative,
		title: 'React Native',
	},
	{
		desc: [
			"Firebase is Google's app development platform. It offers a suite of backend services including a real-time NoSQL database, user authentication, cloud functions, and hosting. No server management required.",
			'As someone who primarily lives on the front end, Firebase fills a meaningful gap. It lets me build full-featured apps independently, handling the backend complexity so I can stay focused on the experience. It pairs naturally with both React and React Native.',
		],
		img: imgFirebase,
		title: 'Firebase',
	},
];
