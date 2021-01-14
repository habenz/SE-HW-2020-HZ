const groceries = [flour, eggs, butter]

class App extends React.Component {
	state = {
		groceries: groceries,
			inputs: {
				itemInput: '',
				brandInput: '',
				unitsInput: '',
				quantityInput: ''
			}
	}

	handleTyping = (event) => {
		console.log(event.target.name)
		console.log(event.target.value)

		const newInputs = this.state.inputs;
		newInputs[`${event.target.name}Input`] = event.target.value
		this.setState({
			inputs: newInputs
		});

		console.log(this.state)
	}

	handleAdd = (event) => {
		// quantity and units are optional, trying out short circuit assignment
		const amt = this.state.inputs.quantityInput || 1;
		const units = this.state.inputs.unitsInput || "N/A";
		const item = {
			item: this.state.inputs.itemInput, 
			brand: this.state.inputs.brandInput, 
			units: units, 
			quantity: amt, 
			isPurchased: false	
		}

		this.setState({
			groceries: [...this.state.groceries, item],
			inputs: {
				itemInput: '',
				brandInput: '',
				unitsInput: '',
				quantityInput: ''
			}
		});

	}

	markBought = (event, itemName) => {
		console.log(itemName)
		const changeIndex = this.state.groceries.findIndex((element) => element.item === itemName);
		let newGroceries = this.state.groceries;
		newGroceries[changeIndex].isPurchased = true;
		this.setState({
			groceries: newGroceries
		});
	}
//<GroceryItem name={grocery.item} markBought={this.markBought}/>
	render() {
		return(
			<div >
				<ItemAdder typing={this.handleTyping} adder={this.handleAdd} inputs={this.state.inputs}/>

				<ul className="grocery-list">
					{this.state.groceries.map((grocery) => !grocery.isPurchased ? <GroceryItem name={grocery.item} markBought={this.markBought}/> : null )}
				</ul>
			</div>
			)
	}
}

class ItemAdder extends React.Component {
	render() {
		return (
			<div className="add-item-wrapper">
				<label htmlFor="item">Item Name:</label>
				<input type="text" name="item" onChange={this.props.typing} value={this.props.inputs.itemInput}/>

				<label htmlFor="brand">Brand:</label>
				<input type="text" name="brand" onChange={this.props.typing} value={this.props.inputs.brandInput}/>

				<label htmlFor="units">Unit</label>
				<input type="text" name="units" onChange={this.props.typing} value={this.props.inputs.unitsInput}/>

				<label htmlFor="quantity">Quantity</label>
				<input type="text" name="quantity" onChange={this.props.typing} value={this.props.inputs.quantityInput}/>

				<button className="add-button" onClick={this.props.adder}> Add Item </button>
			</div>
			)	
	}
}

class GroceryItem extends React.Component {

	handleBuy = (event) => {
		this.props.markBought(event, this.props.name);

	}

	render() {
		return (
			<li className="grocery-item">
				{this.props.name}
				<button className="bought-button" onClick={this.handleBuy}> bought! </button>
			</li>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));