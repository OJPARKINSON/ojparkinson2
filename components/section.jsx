import React from 'react';

const Section = ({ label, children }) => {
	return (
		<div className="section">
            <label className="label">{label}</label>
			{children}
		</div>
	)
};

export default Section