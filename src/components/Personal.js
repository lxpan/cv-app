import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Personal.css';

class Personal extends React.Component {
    render() {
        const { personalInfo } = this.props;

        function personalInput(forVal, defaultVal) {
            return (
                <label htmlFor={forVal}>
                    <input type="text" name={forVal} defaultValue={defaultVal} />
                </label>
            );
        }

        return (
            <div className="personal-container">
                <h3>Personal Details</h3>
                {personalInput('name', personalInfo.name)}
                {personalInput('email', personalInfo.email)}
                <label htmlFor="number">
                    <input type="text" name="number" defaultValue={personalInfo.number} />
                </label>
                {personalInput('location', personalInfo.location)}
                {personalInput('linkedin', personalInfo.linkedin)}
                {personalInput('online', personalInfo.online)}
                <label htmlFor="blurb" className="personal-blurb">
                    <textarea name="blurb" defaultValue={personalInfo.blurb} />
                </label>
            </div>
        );
    }
}

export default Personal;

Personal.propTypes = {
    personalInfo: PropTypes.object,
};
