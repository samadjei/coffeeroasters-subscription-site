import Image from 'next/image';
import { Collections } from '../Data';

const CollectionsItems = () => {
	return (
		<div className="collection__list">
			{Collections.map((collection) => {
				return (
					<div className="collection__list-items" key={collection.id}>
						<Image src={collection.image} alt={collection.alt} width={collection.width} height={collection.height} />
						<div className="collection__list-content">
							<h4>{collection.title}</h4>
							<p>{collection.desc}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CollectionsItems;
