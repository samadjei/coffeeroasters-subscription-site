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
import UnitedKingdom from '../public/assets/about/desktop/illustration-uk.svg';
import Canada from '../public/assets/about/desktop/illustration-canada.svg';
import Australia from '../public/assets/about/desktop/illustration-australia.svg';

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
		number: '01',
		title: 'Pick your coffee',
		desc: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffee in all profiles every month for you to try out.',
	},
	{
		id: 9,
		number: '02',
		title: 'Choose the frequency',
		desc: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
	},
	{
		id: 10,
		number: '03',
		title: 'Receive and enjoy!',
		desc: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
	},
];

export const Countries = [
	{
		id: 11,
		image: UnitedKingdom,
		width: 40.84,
		height: 49.07,
		country: 'United Kingdom',
		address1: '68 ACountriessfordby Rd',
		city: 'Alcaston',
		postcode: 'SY6 1YA',
		number: '+44 1241 918425',
	},
	{
		id: 12,
		image: Canada,
		width: 51.56,
		height: 49.96,
		country: 'Canada',
		address1: '1528 Eglinton Avenue',
		city: 'Toronto',
		postcode: 'Ontario M4P 1A6',
		number: '+1 416 485 2997',
	},
	{
		id: 13,
		image: Australia,
		width: 48.97,
		height: 43.94,
		country: 'Australia',
		address1: '36 Swanston Street',
		city: 'Kewell',
		postcode: 'Victoria',
		number: '+61 4 9928 3629',
	},
];



export const Questions = [
	{
		id: 14,
		question: 'How do you drink your coffee?',
		option1: 'Capsule',
		option1Details: 'Compatible with Nespresso systems and similar brewers',
		option2: 'Filter',
		option2Details: 'For pour over or drip methods like Aeropress, Chemex, and V60',
		option3: 'Espresso',
		option3Details: 'Dense and finely ground beans for an intense, flavorful experience',
		open: true,
	},
	{
		id: 15,
		question: 'What type of coffee?',
		option1: 'Single origin',
		option1Details: 'CDistinct, high quality coffee from a specific family-owned farm',
		option2: 'Decaf',
		option2Details: 'Just like regular coffee, except the caffeine has been removed',
		option3: 'Blended',
		option3Details: 'Combination of two or three dark roasted beans of organic coffees',
		open: false,
	},
	{
		id: 16,
		question: 'How much would you like?',
		option1: '250g',
		option1Details: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
		option2: '500g',
		option2Details: 'Perfect option for a couple. Yields about 40 delectable cups.',
		option3: '1000g',
		option3Details: 'Perfect for offices and events. Yields about 90 delightful cups.',
		open: false,
	},
	{
		id: 17,
		question: 'Want us to grind them?',
		option1: 'Wholebean',
		option1Details: 'Best choice if you cherish the full sensory experience',
		option2: 'Filter',
		option2Details: 'For drip or pour-over coffee methods such as V60 or Aeropress',
		option3: 'Cafetiére',
		option3Details: 'Course ground beans specially suited for french press coffee',
		open: false,
	},
	{
		id: 18,
		question: 'How often should we deliver?',
		option1: 'Every week',
		option1Details: '$14.00 per shipment. Includes free first-class shipping.',
		option2: 'Every 2 weeks',
		option2Details: '$17.25 per shipment. Includes free priority shipping.',
		option3: 'Every month',
		option3Details: '$22.50 per shipment. Includes free priority shipping.',
		open: false,
	},
];

export const Choices = [
	{
		id: 19,
		number: "01",
		title: 'Preferences',
	},
	{
		id: 20,
		number: "02",
		title: 'Bean Type',
	},
	{
		id: 21,
		number: "03",
		title: 'Quantity',
	},
	{
		id: 22,
		number: "04",
		title: 'Grind Options',
	},
	{
		id: 23,
		number: "05",
		title: 'Deliveries',
	},
];
