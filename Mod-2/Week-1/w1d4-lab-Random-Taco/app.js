
class App extends React.Component {
	state = {
		taco: '',
		loaded: false
	}
	
	componentDidMount() {
		this.handleNewTaco();	
	}

	handleNewTaco = () => {
		const URL = 'http://taco-randomizer.herokuapp.com/random/';
		fetch(URL)
			.then((response) => {
				// this function call needed to pass along json? Not sure why exactly
				return response.json();
			})
			.then((taco) =>{
				console.log(taco)
				console.log(taco.shell.name)
				return this.setState({
					taco: taco,
					loaded: true
				});
			})

	}

	render() {
		return (
			<div >
				<h1 className="main-title"> Random Taco! </h1>
				<button className="random-button" onClick={this.handleNewTaco}> New Taco!</button>
				{(this.state.loaded) ? <Taco data={this.state.taco}/> : null}
			</div>
			)
	}

}

class Taco extends React.Component {
	render() {
		// names of the taco portions we want to display
		const components = ['shell', 'mixin', 'condiment']
		return(
			<div >
				{components.map((comp)=> <TitledParagraph title={comp} content={this.props.data[comp]}/>)}
			</div>
		)
	}
}

// helper function for display
function makeCapital(word){
	return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
}

class TitledParagraph extends React.Component {
	render() {
		return (
			<div >
				<h2 className="paragraph-title">
					<span className="paragraph-type">{makeCapital(this.props.title)}: </span> 
					{this.props.content.name}
				</h2>
				<p><pre>{this.props.content.recipe}</pre></p>
			</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));