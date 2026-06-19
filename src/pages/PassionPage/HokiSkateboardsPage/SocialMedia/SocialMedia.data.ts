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
		title: 'Instagram | Hoki Skateboards',
		ariaLabel: 'Instagram',
		href: 'https://instagram.com/hokiskateboards',
		Icon: SvgIconInstagram,
	},
	{
		title: 'Youtube | Hoki Skateboards',
		ariaLabel: 'Youtube',
		href: 'https://www.youtube.com/channel/UCT6ba8pGTUQyYpEk8pnc8og',
		Icon: SvgIconYoutube,
	},
	{
		title: 'Facebook | Hoki Skateboards',
		ariaLabel: 'Facebook',
		href: 'https://www.facebook.com/hokiskateboards',
		Icon: SvgIconFacebook,
	},
	{
		title: 'TikTok | Hoki Skateboards',
		ariaLabel: 'TikTok',
		href: 'https://www.tiktok.com/@hokiskateboards',
		Icon: SvgIconTikTok,
	},
];
