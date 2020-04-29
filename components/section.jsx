import React from 'react';

const Section = ({ label, children }) => {
	return (
		<div className="section">
            <span>{label}</span>
			{children}
		</div>
	)
};

export default Section