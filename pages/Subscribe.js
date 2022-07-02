import { useEffect } from 'react';
import SharedHero from '../components/Shared/SharedHero';
import Steps from '../components/Subscribe/Steps';
import { useState } from 'react';
import { Questions } from '../components/Data';
import Selects from '../components/Subscribe/Selects';
import Select from '../components/Subscribe/Select';
import Button from '../components/Button';
import Modal from '../components/Subscribe/Modal';
import OrderSummary from '../components/Subscribe/OrderSummary';

const Subscribe = () => {
	const [options] = useState(Questions);
	const [drink, setDrink] = useState('_____');
	const [type, setType] = useState('_____');
	const [quantity, setQuantity] = useState('_____');
	const [grind, setGrind] = useState('_____');
	const [frequency, setFrequency] = useState('_____');
	const [price, setPrice] = useState(0);

	// Modal State
	const [modalOpen, setModalOpen] = useState(false);

	const showPrice = () => {
		setModalOpen(true);
		if (quantity === '250g') {
			return frequency === 'Every Week' ? setPrice('$28.20/mo') : frequency === 'Every 2 Weeks' ? setPrice('$19.20/mo') : setPrice('$12.00/mo');
		} else if (quantity === '500g') {
			return frequency === 'Every Week' ? setPrice('$52.00/mo') : frequency === 'Every 2 Weeks' ? setPrice('$35.00/mo') : setPrice('$22.00/mo');
		} else if (quantity === '1000g') {
			return frequency === 'Every Month' ? setPrice('$88.00/mo') : frequency === 'Every 2 Weeks' ? setPrice('$64.00') : setPrice('$42.00/mo');
		} else {
			return price;
		}
	};

	return (
		<main className="container">
			<SharedHero
				class="subscribe"
				title="Create a plan"
				desc="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
			/>
			<Steps />
			<div className="questions">
				<Select />
				<div className="questions__selection">
					<Selects option={options[0]} changeWord={(word) => setDrink(word)} />
					<Selects option={options[1]} changeWord={(word) => setType(word)} />
					<Selects option={options[2]} changeWord={(word) => setQuantity(word)} />
					<Selects option={options[3]} changeWord={(word) => setGrind(word)} />
					<Selects option={options[4]} changeWord={(word) => setFrequency(word)} />
					<OrderSummary drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} price={price} />
					<div className="button__wrapper">
						<Button onClick={() => showPrice()} className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
							Create a plan
						</Button>
						<Modal drink={drink} type={type} quantity={quantity} grind={grind} frequency={frequency} price={price} open={modalOpen} onClose={() => setModalOpen(false)} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Subscribe;
