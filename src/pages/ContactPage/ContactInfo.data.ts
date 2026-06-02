export type ContactInfoLine = {
	href?: string;
	text: string;
};

export type ContactInfoItemData = {
	icon: string;
	id: string;
	lines: ContactInfoLine[];
};

export const CONTACT_INFO: ContactInfoItemData[] = [
	{
		icon: 'fa-phone',
		id: 'phone',
		lines: [{ href: 'tel:+18016912373', text: '801-691-2373' }],
	},
	{
		icon: 'fa-envelope',
		id: 'email',
		lines: [
			{
				href: 'mailto:travis.hoki@gmail.com',
				text: 'travis.hoki@gmail.com',
			},
			{
				text: '(Preferred)',
			},
		],
	},
	{
		icon: 'fa-map-marker',
		id: 'location',
		lines: [
			{ text: 'Pleasant Grove, UT' },
			{ text: 'United States' },
			{ text: 'Mountain Time (MT)' },
		],
	},
	{
		icon: 'fa-clock-o',
		id: 'availability',
		lines: [{ text: 'Open to remote work' }, { text: 'Available worldwide' }],
	},
];
