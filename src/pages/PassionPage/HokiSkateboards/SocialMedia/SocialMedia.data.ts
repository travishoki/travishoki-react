import { SvgIconFacebook } from '~svg/SvgIconFacebook';
import { SvgIconInstagram } from '~svg/SvgIconInstagram';
import { SvgIconTikTok } from '~svg/SvgIconTikTok';
import { SvgIconYoutube } from '~svg/SvgIconYoutube';

export type SocialMediaItemData = {
	Icon: React.ComponentType<{ color: string; size: number }>;
	ariaLabel: string;
	href: string;
	title: string;
};

export const SOCIAL_MEDIA_ITEMS: SocialMediaItemData[] = [
	{
		Icon: SvgIconInstagram,
		ariaLabel: 'Instagram',
		href: 'https://instagram.com/hokiskateboards',
		title: 'Instagram | Hoki Skateboards',
	},
	{
		Icon: SvgIconYoutube,
		ariaLabel: 'Youtube',
		href: 'https://www.youtube.com/channel/UCT6ba8pGTUQyYpEk8pnc8og',
		title: 'Youtube | Hoki Skateboards',
	},
	{
		Icon: SvgIconFacebook,
		ariaLabel: 'Facebook',
		href: 'https://www.facebook.com/hokiskateboards',
		title: 'Facebook | Hoki Skateboards',
	},
	{
		Icon: SvgIconTikTok,
		ariaLabel: 'TikTok',
		href: 'https://www.tiktok.com/@hokiskateboards',
		title: 'TikTok | Hoki Skateboards',
	},
];
