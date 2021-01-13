class InnermostDiv extends React.Component {
	render() {
		return (
			<div >
				<h3 onClick={() => this.props.changeIt(this.props.text)}> {this.props.text} </h3>
			</div>
			)
	}
}

class NestedDiv extends React.Component {
	render() {
		return (
			<div >
				{this.props.inner}
			</div>
			)
	}
}

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
			<div >
				<NestedDiv inner={
					<NestedDiv 
					inner={<InnermostDiv changeIt={this.changeIt} text={text}/>}
					/>}
				/>
			</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('container'));