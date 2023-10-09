function Stats({items}) {

	if(!items.length) 
	
	return (
		<p className='stats'>
			<em>
				Start adding items to your packing list.
			</em>
		</p>
	)

	const itemQuantity = items.length

	const packedItems = items.reduce((acc, curr) => {
		if(curr.packed === true) {
			return acc + 1; 
		}
		return acc; 
	}, 0); 

	const packedPercentage = itemQuantity === 0 ? 0 : Math.round(packedItems / itemQuantity * 100);
	
	return (
		<footer className='stats'>
			<em>
				{packedPercentage === 100 ? 'You got everything! Ready to go!' : `You have ${itemQuantity} items on your list, and you already packed ${packedItems} (${packedPercentage}%).`}
			</em>
		</footer>
	)
}; 

export default Stats;