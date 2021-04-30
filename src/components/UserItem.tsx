import React from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
	user: IUser
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
	return (
		<div style={{padding: 10, border: '1px solid grey'}}>
			{user.id}. {user.name} living in {user.address.city}, street: {user.address.street}
		</div>
	);
};

export default UserItem;