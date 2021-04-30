import React from 'react';
import Card, {CardVariant} from "./components/Card";
import {IUser} from "./types/types";
import UsersList from "./components/UsersList";

const App = () => {
	const users: IUser[] = [
		{id: 1, name: 'Andrii', email: 'a@gmail.com', address: {street: "Entuziastiv", city:'Kyiv', zipcode: '02100'}},
		{id: 2, name: 'Tolya', email: 'a@gmail.com', address: {street: "Stusa", city:'Kyiv', zipcode: '02100'}}
	]
	return (
		<div>
			<Card
				width='200px'
				height='200px'
				variant={CardVariant.primary}
				onClick={(num) => console.log(num)}
			>
				<button>Click me!</button>
			</Card>
			<UsersList users={users}/>
		</div>
	);
};

export default App;