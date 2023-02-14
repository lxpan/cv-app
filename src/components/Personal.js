import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Personal.css';

class Personal extends React.Component {
    render() {
        const { personalInfo, handleInputChange } = this.props;

        function personalInput(forVal, defaultVal, type = 'text') {
            return (
                <label htmlFor={forVal}>
                    <input
                        type={type}
                        name={forVal}
                        defaultValue={defaultVal}
                        onChange={(event) => handleInputChange(event, 'personalDetails')}
                    />
                </label>
            );
        }

        return (
            <div className="personal-container">
                <h3>Personal Details</h3>
                {personalInput('name', personalInfo.name)}
                {personalInput('profession', personalInfo.profession)}
                {personalInput('email', personalInfo.email)}
                {personalInput('number', personalInfo.number, 'tel')}
                {personalInput('location', personalInfo.location)}
                {personalInput('online', personalInfo.online)}
                <label htmlFor="blurb" className="personal-blurb">
                    <textarea
                        name="blurb"
                        defaultValue={personalInfo.blurb}
                        onChange={(event) => handleInputChange(event, 'personalDetails')}
                    />
                </label>
            </div>
        );
    }
}

export default Personal;

Personal.propTypes = {
    personalInfo: PropTypes.object,
    handleInputChange: PropTypes.func,
};
