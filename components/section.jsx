import React from 'react';

const Section = ({ label, children }) => (
  <div className="section" id={label}>
    <div className="label">{label}</div>
    {children}
  </div>
);

export default Section;
