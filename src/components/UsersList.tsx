import React from 'react';
import {IUser} from "../types/types";

interface IPropUsersList {
	users: IUser[]
}

const UsersList: React.FC<IPropUsersList> = ({users}) => {
	return (
		<div>
			{
				users.map(user=>
					<div key={user.id} style={{padding: 10, border: '1px solid grey'}}>
						{user.id}. {user.name} living in {user.address.city}, street: {user.address.street}
					</div>
				)
			}
		</div>
	);
};

export default UsersList;