import React from 'react';
import '../styles/Personal.css';

class Personal extends React.Component {
    render() {
        const loremIpsum =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

        const personalInput = (forVal, defaultVal) => (
            <label htmlFor={forVal}>
                <input type="text" name={forVal} defaultValue={defaultVal} />
            </label>
        );

        return (
            <div className="personal-container">
                <h3>Personal Details</h3>
                {personalInput('name', 'John Doe')}
                {personalInput('email', 'j.doe@mail.com')}
                <label htmlFor="number">
                    <input type="text" name="number" defaultValue="555-555-555" />
                </label>
                {personalInput('location', 'Melbourne, AU')}
                {personalInput('linkedin', 'linkedin.com/jdoe899')}
                {personalInput('online', 'www.johndoeportfolio.com')}
                <label htmlFor="blurb" className="personal-blurb">
                    <textarea name="blurb" defaultValue={loremIpsum} />
                </label>
            </div>
        );
    }
}

export default Personal;
