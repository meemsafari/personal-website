import React from "react";

const Button = ({children, handleClick = () => {}}) => {

	return (
		<button onClick={handleClick} className="btn btn-danger">
			{children}
		</button>
	)
}

export default Button;
