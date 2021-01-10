class Sidebar extends React.Component {
	render() {
		return (
			<ul className="sidebar">
				<li><a href="">Dashboard</a></li>
				<li><a href="">Widget</a></li>
				<li><a href="">Reviews</a></li>
				<li><a href="">Customers</a></li>
				<li><a href="">Online Analysis</a></li>
				<li><a href="">Settings</a></li>
			</ul>
			)
	}
}

class Reviews extends React.Component {
	render() {
		return (
			<div className="reviews main-component">
				<h3>Reviews</h3>
				<h2>{this.props.numReviews}</h2>
			</div>
		)
	}
}

class AvgRating extends React.Component {
	render() {
		return (
			<div className="avg-rating main-component">
				<h3>Average Rating</h3>
				<h2>{this.props.avgRating}</h2>
			</div>
			)
	}
}

let sentiments = [960, 122, 321]

class SentimentAnalysis extends React.Component {
	render() {
		let items = [];
		for (const sent of sentiments) {
			items.push(<li className="sentiment">{sent}</li>)
		}
		return (
			<div className="sentiment-analysis main-component">
				<h3>Sentiment Analysis </h3>
				<ul >
					{items}
				</ul>
			</div>
			)
	}
}

class WebsiteVisitors extends React.Component {
	render() {
		return (
			<div className="website-visitors main-component">
				<h3>Website Visitors</h3>
				<h2>{this.props.visitors}</h2>
				<Graph />
			</div>
		)
	}
}

class Graph extends React.Component {
	render() {
		return (
			<div className="graph">
				<img src="graph.png" />
			</div>
			)
	}
}

class App extends React.Component {
	render() {
		return ( 
			<div id="App">
				<Sidebar/>

				<Reviews numReviews="1281"/>
				<AvgRating avgRating="4.6"/>
				<SentimentAnalysis />

				<WebsiteVisitors visitors="821"/>
			</div>
			)
	}
} 

ReactDOM.render(
	<App/>,
	document.querySelector('main') 
	);
