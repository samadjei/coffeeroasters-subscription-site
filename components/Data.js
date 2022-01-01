// Collection
import granEspressoImg from '../public/assets/home/desktop/image-gran-espresso.png';
import dancheImg from '../public/assets/home/desktop/image-danche.png';
import piccolloImg from '../public/assets/home/desktop/image-piccollo.png';
import planaltoImg from '../public/assets/home/desktop/image-planalto.png';

// Benefits 
import CoffeeBean from '../public/assets/home/desktop/icon-coffee-bean.svg';
import Gift from '../public/assets/home/desktop/icon-gift.svg';
import Truck from '../public/assets/home/desktop/icon-truck.svg';

// Headquaters 
// import UnitedKingdom from "../"
import UnitedKingdom from "../public/assets/about/desktop/illustration-uk.svg"
import Canada from "../public/assets/about/desktop/illustration-canada.svg"
import Australia from "../public/assets/about/desktop/illustration-australia.svg"

export const Collections = [
	{
		id: 1,
		image: granEspressoImg,
		title: 'Gran Espresso',
		desc: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
		width: 255,
		height: 193,
		alt: 'Gran Espresso',
	},
	{
		id: 2,
		image: planaltoImg,
		title: 'Planalto',
		desc: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
		width: 255,
		height: 193,
		alt: 'Planalto',
	},
	{
		id: 3,
		image: piccolloImg,
		title: 'Piccollo',
		desc: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
		width: 255,
		height: 193,
		alt: 'Piccollo',
	},
	{
		id: 4,
		image: dancheImg,
		title: 'Danche',
		desc: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
		width: 255,
		height: 193,
		alt: 'Danche',
	},
];

export const Benefits = [
	{
		id: 5,
		image: CoffeeBean,
		title: 'Best Quality',
		desc: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
		width: 72,
		height: 72,
		alt: 'Coffee Bean',
	},
	{
		id: 6,
		image: Gift,
		title: 'Exclusive benefits',
		desc: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
		width: 72,
		height: 72,
		alt: 'Gift',
	},
	{
		id: 7,
		image: Truck,
		title: 'Free shipping',
		desc: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
		width: 72,
		height: 72,
		alt: 'Truck',
	},
];


export const Works = [
	{
		id: 8,
		number: "01",
		title: "Pick your coffee",
		desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffee in all profiles every month for you to try out.",
	},
	{
		id: 9,
		number: "02",
		title: "Choose the frequency",
		desc: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
	},
	{
		id: 10,
		number: "03",
		title: "Receive and enjoy!",
		desc: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
	},
]

export const Countries = [
	{
		id: 11,
		image: UnitedKingdom,
		width: 40.84,
		height: 49.07,
		country: "United Kingdom",
		address1: "68 ACountriessfordby Rd",
		city: "Alcaston",
		postcode: "SY6 1YA",
		number: "+44 1241 918425",
	},
	{
		id: 12,
		image: Canada,
		width: 51.56,
		height: 49.96,
		country: "Canada",
		address1: "1528 Eglinton Avenue",
		city: "Toronto",
		postcode: "Ontario M4P 1A6",
		number: "+1 416 485 2997",
	},
	{
		id: 13,
		image: Australia,
		width: 48.97,
		height: 43.94,
		country: "Australia",
		address1: "36 Swanston Street",
		city: "Kewell",
		postcode: "Victoria",
		number: "+61 4 9928 3629",
	},
]