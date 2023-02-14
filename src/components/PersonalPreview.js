import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PersonalPreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquarePhone,
    faSquareEnvelope,
    faSquareArrowUpRight,
    faSquareH,
} from '@fortawesome/free-solid-svg-icons';

class PersonalPreview extends React.Component {
    render() {
        const { personalInfo } = this.props;

        return (
            <div className="personal-preview-container">
                <div className="personal-preview-name">
                    <h1 className="personal-preview-name__heading">
                        {personalInfo.name.toUpperCase()}
                    </h1>
                    <h2>{personalInfo.profession}</h2>
                </div>

                <div className="personal-preview-contact">
                    <span className="personal-preview-contact_item">
                        <FontAwesomeIcon icon={faSquarePhone} />
                        {personalInfo.number}
                    </span>
                    <span className="personal-preview-contact_item">
                        <FontAwesomeIcon icon={faSquareEnvelope} />
                        {personalInfo.email}
                    </span>
                    <span className="personal-preview-contact_item">
                        <FontAwesomeIcon icon={faSquareArrowUpRight} />
                        {personalInfo.online}
                    </span>
                    <span className="personal-preview-contact_item">
                        <FontAwesomeIcon icon={faSquareH} />
                        {personalInfo.location}
                    </span>
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
