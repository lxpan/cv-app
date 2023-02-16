import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Education.css';

class Education extends React.Component {
    render() {
        const { educationInfo, handleInputChange, handleEducationSubmit } = this.props;

        function educationInput(forVal, defaultVal, type = 'text') {
            return (
                <label htmlFor={forVal}>
                    <input
                        type={type}
                        name={forVal}
                        defaultValue={defaultVal}
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
                    {educationInput('provider', educationInfo.provider)}
                    {educationInput('program', educationInfo.program)}
                    {educationInput('dateFrom', educationInfo.dateFrom)}
                    {educationInput('dateTo', educationInfo.dateTo)}
                    {educationInput('major', educationInfo.major)}
                    {educationInput('location', educationInfo.location)}
                    <input type="submit" value="Add Experience" />
                </form>
            </div>
        );
    }
}

export default Education;

Education.propTypes = {
    educationInfo: PropTypes.object,
    educationExperience: PropTypes.array,
    handleInputChange: PropTypes.func,
    handleEducationSubmit: PropTypes.func,
};
