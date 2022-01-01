import CollectionItems from './CollectionItems';

const Collection = () => {
	return (
		<section className="collection">
			<div className="collection__content">
				<span className="collection--text big--text big--text-gradient">our collection</span>
			</div>
			<CollectionItems />
		</section>
	);
};

export default Collection;
