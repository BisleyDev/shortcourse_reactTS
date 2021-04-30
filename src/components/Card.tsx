import React, {useState} from 'react';

export enum CardVariant {
	outlined = "outlined",
	primary = 'primary'
	
}

interface IPropsCard {
	width?: string;
	height?: string;
	variant: CardVariant,
	onClick: (num: number) => void
}

const Card: React.FC<IPropsCard> =
	({
		 width,
		 height,
		 variant,
		 onClick,
		 children
	 }) => {
	const [state, setState] = useState(0)
		return (
			<div style={{
				width,
				height,
				border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
				backgroundColor: variant === CardVariant.primary ? 'lightgrey' : ''
			}}
				  onClick={() => onClick(state)}
			>
				{children}
			</div>
		);
	};

export default Card;