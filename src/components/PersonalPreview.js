import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PersonalPreview.css';

class PersonalPreview extends React.Component {
    render() {
        const { personalInfo } = this.props;

        return (
            <div className="personal-preview-container">
                <div className="personal-preview-name">
                    <h1 className="personal-preview-name__heading">
                        {personalInfo.name.toUpperCase()}
                    </h1>
                    <h2>Software Engineer</h2>
                </div>

                <div className="personal-preview-contact">
                    <span>{personalInfo.number}</span>
                    <span>{personalInfo.email}</span>
                    <span>{personalInfo.location}</span>
                </div>
                <div className="personal-preview-blurb">
                    <div className="personal-summary-heading">
                        <h3>Summary</h3>
                        <hr></hr>
                    </div>
                    {personalInfo.blurb}
                </div>
            </div>
        );
    }
}

export default PersonalPreview;

PersonalPreview.propTypes = {
    personalInfo: PropTypes.object,
    handleInputChange: PropTypes.func,
};
