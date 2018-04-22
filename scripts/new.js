import React from 'react';

export class ShowCategories extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		var xhttp = new XMLHttpRequest();
		var self = this;

		xhttp.onreadystatechange = function(e){
			if (xhttp.readyState === 4 && xhttp.status === 200){
				// console.log("ok, response :", this.response);
				self.setState({
				categories: JSON.parse(this.response)
			});
			}
		}
		xhttp.open("get", "//api.icndb.com/categories", true);
		xhttp.send();
	}

	render() {
		let postsLoaded = this.state.categories.value != undefined;
		// console.log(this.state.categories.value);
		return (
			postsLoaded ?
			<ul className="categories">
			{
				this.state.categories.value.map(
					categorie => {
					return <li key={categorie}> { categorie } </li>;
				})
			}
			</ul>
			:
			<div>Loading...</div>
		);
	}
};

export class RandomJokes extends React.Component {
	constructor(props) {
		super(props);
		this.isValid = true;
		this.numb = 1;
		this.state = {
			jokes: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	};

	handleChange(event) {
		if (event.target.value === undefined || event.target.value === '') {
			this.numb = 1;
			this.isValid = false;
			console.log(`not valid 1`);
			return 
		} else if ( isNaN(event.target.value) || event.target.value <= 0 || event.target.value > 10 ) {
			this.isValid = false;
			console.log(this.isValid);
			return 
		}
		this.isValid = true;
		this.numb = event.target.value;
		this.componentDidMount();
	};

	handleClick() {
		this.componentDidMount();
	};

	componentDidMount() {
		var xhttp = new XMLHttpRequest();
		var self = this;
		console.log(this.numb);
		var link = `//api.icndb.com/jokes/random/${this.numb}`;

		xhttp.onreadystatechange = function(e){
			// console.log(this);
			if (xhttp.readyState === 4 && xhttp.status === 200){
				// console.log("ok, response :", this.response);
				self.setState({
				jokes: JSON.parse(this.response)
			});
			}
		}
		xhttp.open("get", link, true);
		xhttp.send();
	}

	render() {
		let postsLoaded = this.state.jokes.value != undefined;
		let validMessage = this.isValid;
		console.log(this.state.jokes.value);
		return(
			postsLoaded ?
			<div className="jokes">
				{
					this.state.jokes.value.map(
						(joke, index) => {
						return <div key={joke.id} className="joke"> { index + 1 } { joke.joke } </div>;
					})
				}
				<div>Please write numbers of random jokes from 1 to 10 show {this.numb} <br/>
					<input type="text" onChange={this.handleChange} />
				</div>
				<div>
					<button onClick={this.handleClick} > refresh </button>
					<div> { validMessage ? '' : 'olololo' } </div>
				</div>
			</div>
			:
			<div>Loading...</div>
		);
	}
}

