import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import './index.css';

function App() {

	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(itemToDelete) {
		const updatedItems = items.filter((item) => item.id !== itemToDelete);
		setItems(updatedItems);
	}

	function handleToggleItem(id) {
		console.log(id);
		const toggledItem = items.map(item => item.id === id ? {...item, packed: !item.packed} : item)
		setItems(toggledItem);
	}

	function handleClearList() {

		const confirmed = window.confirm('Are you sure you want to clear all items?');
		if(confirmed) {
			setItems([]);
		}
	}

	return (
		<div className="app">
			<Logo/>
			<Form onAddItems={handleAddItems}/>
			<PackingList 
				items={items} 
				onDeleteItem={handleDeleteItem} 
				onToggleItem={handleToggleItem} 
				onClearList={handleClearList}
			/>
			<Stats items={items}/>
		</div>
	);
};

export default App;
