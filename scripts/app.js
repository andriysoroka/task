import React from 'react';
import ReactDOM from 'react-dom';
import { randomJokes, numberOfJokes, CategoriesOfJokes} from './api.servis.js'
import { RandomJokes, ShowCategories } from './new.js'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};


// numberOfJokes();

const RefreshButton = () => {
	return (
		<div>	
			<button onClick={randomJokes} > refresh </button>
		</div>
	)
};
// const Categories = () => {
// 	let categories = categoriesOfJokes();
// 	console.log(categories);
// };


 class Element extends React.Component {
 	render() {
 		return (
			<div>
				<h1>
					Hello, {formatName(user)}!
					<RefreshButton />
				</h1>
				<ShowCategories />
				<RandomJokes />
			</div>	
		)
 	}
};

ReactDOM.render(
  <Element />,
  document.getElementById('root')
);