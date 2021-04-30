import React from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface IPropUsersList {
	users: IUser[]
}

const UsersList: React.FC<IPropUsersList> = ({users}) => {
	return (
		<div>
			{
				users.map(user =>
					<UserItem key={user.id} user={user}/>
				)
			}
		</div>
	)
}

export default UsersList;