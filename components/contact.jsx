import React from 'react'

const Contact = () => {
    return (
        <ul className="contactContainer">
            <ContactPod text="Linkedin" link="https://www.linkedin.com/in/oliver-parkinson-a551b9166" smallText="Work experiance" />
            <ContactPod text="Github" link="https://github.com/ojparkinson" smallText="Current projects" />
            <ContactPod text="Medium" link="https://medium.com/@olliepar01" smallText="Blog" />
        </ul>
    )
};

const ContactPod = ({link, text, smallText}) => {
    return (
        <li className="contactItem">
            <a href={link} target="_blank">
                <h3>{text}</h3>
                <p>{smallText}</p>
            </a>
        </li>
    )
}

export default Contact