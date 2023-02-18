import React from 'react';
import PropTypes from 'prop-types';
import { LoremIpsum } from 'lorem-ipsum';
import '../styles/WorkPreview.css';

function WorkPreview(props) {
    const { workExperience, handleWorkEdit } = props;

    const lorem = new LoremIpsum();

    function workExperienceEntry(workItem, loremIpsum = false) {
        let description;

        if (loremIpsum) {
            description = `${workItem.description}. ${lorem.generateSentences(4)}`;
        }
        else {
            description = workItem.description;
        }

        return (
            <div className="work-experience-item" key={workItem.id}>
                <div className="company-heading">
                    <b>{workItem.company}</b>
                    <span className="company-location_span">{workItem.location}</span>
                </div>
                <div className="job-title-and-tenure">
                    <div className="job-title">
                        {workItem.position ? workItem.position.toUpperCase() : ''}
                    </div>
                    <span className="job-tenure-dateRange">
                        {workItem.dateFrom} - {workItem.dateTo}
                    </span>
                </div>
                <div className="job-experience-description">{description}</div>
                <button
                    className="editWorkBtn"
                    onClick={(event) => handleWorkEdit(event, workItem.id)}
                >
                    Edit Entry
                </button>
            </div>
        );
    }

    return (
        <div className="work-preview-container">
            <div className="work-section-heading">
                <h3 className="work-section_h3">Work Experience</h3>
                <div className="work-section-divider"></div>
            </div>
            {workExperience.map((item) => workExperienceEntry(item))}
        </div>
    );
}

WorkPreview.propTypes = {
    workExperience: PropTypes.array,
    handleWorkEdit: PropTypes.func,
};

export default WorkPreview;
