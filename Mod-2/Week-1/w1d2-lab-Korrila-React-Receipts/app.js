const receipts = [receipt1, receipt2, receipt3];

class App extends React.Component {
	state = {
		receipts: receipts
	}

	handleClick = (event,receipt) => {
		const toggleIndex = this.state.receipts.findIndex((item) => item.person === receipt.person);

		let newR = this.state.receipts;
		newR[toggleIndex].paid = true;
		this.setState({
			receipts: newR
		})
	}

	render() {
		return (
			<div id="App">
				{this.state.receipts.map((receipt) => {
					return (!receipt.paid ? <Receipt content={receipt} handleClick={this.handleClick} /> : null )
				})}
			</div>
			)
	}
}

function makeCapital(word){
	return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
}

class Receipt extends React.Component {
	render() {
		const simpleOrderComponents = ["main", "protein", "rice", "sauce", "drink", "cost"];
		return (
			<div className="receipt" onClick={(event) => this.props.handleClick(event, this.props.content)}>
			{/*need to pass the receipt content through anon function, get the click handler from parent*/}
				<h3> {this.props.content.person} </h3>
				<ul>
					{simpleOrderComponents.map((comp)=>{
						return (
							<li>
								<span className="title">{makeCapital(comp)}</span>: {this.props.content.order[comp]}
							</li>
							)
					})}
				</ul>
			</div>
			)
	}

}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)