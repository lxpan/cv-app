import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Education.css';

function Education(props) {
    const { educationInfo, handleInputChange, handleEducationSubmit } = props;

    function educationInput(forVal, value, type = 'text') {
        return (
            <label htmlFor={forVal}>
                <input
                    type={type}
                    name={forVal}
                    value={value}
                    placeholder={forVal[0].toUpperCase() + forVal.substring(1)}
                    onChange={(event) => handleInputChange(event, 'educationDetails')}
                />
            </label>
        );
    }

    return (
        <div className="education-container">
            <h3>Education Details</h3>
            <form onSubmit={handleEducationSubmit}>
                {educationInput('provider', educationInfo ? educationInfo.provider : '')}
                {educationInput('location', educationInfo ? educationInfo.location : '')}
                {educationInput('program', educationInfo ? educationInfo.program : '')}
                {educationInput('dateFrom', educationInfo ? educationInfo.dateFrom : '')}
                {educationInput('dateTo', educationInfo ? educationInfo.dateTo : '')}
                {educationInput('major', educationInfo ? educationInfo.major : '')}
                {educationInput('minor', educationInfo ? educationInfo.minor : '')}

                <input type="submit" value="Add Experience" />
            </form>
        </div>
    );
}

Education.propTypes = {
    educationInfo: PropTypes.object,
    educationExperience: PropTypes.array,
    handleInputChange: PropTypes.func,
    handleEducationSubmit: PropTypes.func,
};

export default Education;
