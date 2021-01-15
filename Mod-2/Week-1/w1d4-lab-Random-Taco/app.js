
class App extends React.Component {
	state = {
		taco: '',
	}

	handleNewTaco = () => {
		const URL = 'http://taco-randomizer.herokuapp.com/random/';
		fetch(URL)
			.then((response) => {
				// this function call needed to pass along json? Not sure
				return response.json();
			})
			// .then((taco) => this.setState({taco: taco}))
			.then((taco) =>{
				console.log(taco)
				console.log(taco.shell.name)
				return this.setState({
					taco: taco
				});
			})

	}
	render() {
		return (
			<div >
				<h1> Random Taco </h1>
				{!(this.state.taco === '') ? <Taco data={this.state.taco}/> : null}
				<button onClick={this.handleNewTaco}> New Taco!</button>
			</div>
			)
	}

}

class Taco extends React.Component {
	render() {
		const components = ['shell', 'mixin', 'condiment']
		console.log(this.props.data[components[0]]);
		return(
			<div >
				{components.map((comp)=> <TitledParagraph title={comp} content={this.props.data[comp]}/>)}
			</div>
		)
	}
}

function makeCapital(word){
	return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
}

class TitledParagraph extends React.Component {
	render() {
		return (
			<div >
				<h3>
					<span>{makeCapital(this.props.title)}:</span> 
					{this.props.content.name}
				</h3>
				<p>{this.props.content.recipe}</p>
			</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));