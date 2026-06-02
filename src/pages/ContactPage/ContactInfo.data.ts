export type ContactInfoLine = {
	href?: string;
	text: string;
};

export type ContactInfoItemData = {
	icon: string;
	lines: ContactInfoLine[];
	title: string;
};

export const CONTACT_INFO: ContactInfoItemData[] = [
	{
		icon: 'fa-phone',
		lines: [{ href: 'tel:+18016912373', text: '801-691-2373' }],
		title: 'Phone Number',
	},
	{
		icon: 'fa-envelope',
		lines: [
			{ href: 'mailto:travis.hoki@gmail.com', text: 'travis.hoki@gmail.com' },
		],
		title: 'Email',
	},
	{
		icon: 'fa-map-marker',
		lines: [{ text: 'Pleasant Grove, UT' }, { text: 'United States' }],
		title: 'Location',
	},
	{
		icon: 'fa-clock-o',
		lines: [{ text: 'Open to remote work' }, { text: 'Available worldwide' }],
		title: 'Availability',
	},
];
