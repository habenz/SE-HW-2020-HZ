class App extends React.Component {
	state = {
		tardis:{
			name: 'Time and Relative Dimension in Space',
			caps: false
		}
	}

	changeIt = (text) => {
		if (this.state.tardis.caps) {
			this.setState({
				tardis: {
					name: text.toLowerCase(),
					caps: false
				}
			});
		} else {
			this.setState({
				tardis: {
					name: text.toUpperCase(),
					caps: true
				}
			});
		}
	}

	render() {
		let text = this.state.tardis.name;
		return (
			<div onClick={() => this.changeIt(text)}>
				<DivOne data={text}/>
			</div>
			)
	}
}

class DivOne extends React.Component {
	render() {
		return(
			<div >
				<DivTwo data={this.props.data}/>
			</div>
			)
	}
}

class DivTwo extends React.Component {
	render() {
		return(
			<div >
				<DivThree data={this.props.data}/>
			</div>
			)
	}
}

class DivThree extends React.Component {
	render() {
		return(
			<div >
				<h3> {this.props.data} </h3>
			</div>
			)
	}
}
ReactDOM.render(<App/>, document.getElementById('container'));