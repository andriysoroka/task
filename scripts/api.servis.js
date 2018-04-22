
import React from 'react';
 let categories;

export const randomJokes = () => {

	let jokes, xhr;
	xhr = new XMLHttpRequest();
	xhr.open("GET", "//api.icndb.com/jokes/random/10", true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			jokes = JSON.parse(xhr.responseText);
			console.log(jokes);
		}
	};
};

export const numberOfJokes = () => {
	let numb, xhr;
	xhr = new XMLHttpRequest();
	xhr.open("GET", "//api.icndb.com/jokes/count", true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			numb = JSON.parse(xhr.responseText);
			console.log(numb);
		}
	};
};

export const CategoriesOfJokes = () => {
	let xhr;
	xhr = new XMLHttpRequest();
	xhr.open("GET", "//api.icndb.com/categories", true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			categories = JSON.parse(xhr.responseText);
			// console.log(categories.value);
			return categories.value;
		}
	};
};
let lol = CategoriesOfJokes();


export class ShowCategories extends React.Component {
	render(){
		return (
			<div>
				{console.log(lol)}		
			</div>
		)
	}
}

