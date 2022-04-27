export const navigation = [
	{
		name: 'home',
		href: '/',
	},
	{
		name: 'werk',
		href: '/werk',
	},
	{
		name: 'over',
		href: '/over',
	},
	{
		name: 'diensten',
		href: '/diensten',
	},
	{
		name: 'partners',
		href: '/partners',
	},
	{
		name: 'stories',
		href: '/stories',
	},
	{
		name: 'vacatures',
		href: '/vacatures',
	},
]

export const countries = [
	'global',
	'nederland',
	'united states',
	'united kingdom',
	'ireland',
	'deutchland',
	'schweiz',
]

export const icons = {
	instagram: {src: require('../assets/Icons/instagram.png')},
	facebook: {src: require('../assets/Icons/facebook.png')},
	twitter: {src: require('../assets/Icons/twitter.png')},
	dept: {src: require('../assets/Icons/dept.png')},
	burger: {src: require('../assets/Icons/burger.png')},
	arrow: {src: require('../assets/Icons/arrow.png')},
	arrowBlue: {src: require('../assets/Icons/arrow-blue.png')},
}

export const socials = ['facebook', 'instagram', 'twitter', 'linkedin']

export const images = {
	headerDesktop: {src: require('../assets/images/Header.png')},
	headerMobile: {src: require('../assets/images/header-mobile.png')},
	arla: {src: require('../assets/images/arla.png'), name: 'arla'},
	bolcom: {src: require('../assets/images/bolcom.png'), name: 'bolcom'},
	chocomel: {src: require('../assets/images/chocomel.png'), name: 'chocomel'},
	florensis: {
		src: require('../assets/images/florensis.png'),
		name: 'florensis',
	},
	gemeentemuseum: {
		src: require('../assets/images/gemeentemuseum.png'),
		name: 'gemeentemuseum',
	},
	jbl: {src: require('../assets/images/jbl.png'), name: 'jbl'},
	kempen: {src: require('../assets/images/kempen.png'), name: 'kempen'},
	koninklijkeBibliotheek: {
		src: require('../assets/images/koninklijke-bibliotheek.png'),
		name: 'koninklijke-bibliotheek',
	},
	libertyGlobal: {
		src: require('../assets/images/liberty-global.png'),
		name: 'liberty-global',
	},
	lightning: {
		src: require('../assets/images/lightning.png'),
		name: 'lightning',
	},
	philips: {src: require('../assets/images/philips.png'), name: 'philips'},
	tui: {src: require('../assets/images/tui.png'), name: 'tui'},
	zalando: {src: require('../assets/images/zalando.png'), name: 'zalando'},
	logos: [
		require('../assets/logos/Nivea_logo_zwart.png'),
		require('../assets/logos/Mona_logo_zwart.png'),
		require('../assets/logos/Transavia_logo_zwart.png'),
		require('../assets/logos/Zalando_logo_zwart.png'),
		require('../assets/logos/Tomtom_logo_zwart.png'),
		require('../assets/logos/Unilever_logo_zwart.png'),
		require('../assets/logos/Adidas_logo_zwart.png'),
		require('../assets/logos/Pathe_logo_zwart.png'),
		require('../assets/logos/ABN_logo_zwart.png'),
		require('../assets/logos/Triumph_logo_zwart.png'),
		require('../assets/logos/Microsoft_logo_zwart.png'),
		require('../assets/logos/Oxxio_logo_zwart.png'),
		require('../assets/logos/NN_logo_zwart.png'),
		require('../assets/logos/Ziggo_logo_zwart.png'),
		require('../assets/logos/Walibi_logo_zwart.png'),
		require('../assets/logos/KLM_logo_zwart.png'),
	],
}

export const ApiEndpoints = {
	CONTACTS: {
		BASE_URL: 'https://dept-api.abaalltheway.com/contacts',
		ADD_CONTACT: {
			URL: '/',
			METHOD: 'POST',
		},
		GET_CONTACTS: {
			URL: '/',
			METHOD: 'GET',
		},
	},
	CASES: {
		BASE_URL: 'https://dept-api.abaalltheway.com/cases',
		ADD_CASE: {
			URL: '/',
			METHOD: 'POST',
		},
		GET_CASES: {
			URL: '/',
			METHOD: 'GET',
		},
		GET_CASE: {
			URL: '/case',
			METHOD: 'GET',
		},
	},
}
