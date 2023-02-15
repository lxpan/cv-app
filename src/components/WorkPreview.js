import React from 'react';
import PropTypes from 'prop-types';
import { LoremIpsum } from 'lorem-ipsum';
import '../styles/WorkPreview.css';

class WorkPreview extends React.Component {
    render() {
        const { workExperience } = this.props;

        const lorem = new LoremIpsum();

        function WorkExperienceEntry(workItem, loremIpsum = false) {
            let description;

            if (loremIpsum) {
                description = `${workItem.description}. ${lorem.generateSentences(4)}`;
            }
            else {
                description = workItem.description;
            }

            return (
                <div className="work-experience-item">
                    <div className="company-heading">
                        <b>{workItem.company}</b>
                        <span className="company-location_span">{workItem.location}</span>
                    </div>
                    <div className="job-title-and-tenure">
                        <div className="job-title">{workItem.position.toUpperCase()}</div>
                        <span className="job-tenure-dateRange">
                            {workItem.dateFrom} - {workItem.dateTo}
                        </span>
                    </div>
                    <div className="job-experience-description">{description}</div>
                </div>
            );
        }

        return (
            <div className="work-preview-container">
                <div className="work-section-heading">
                    <h3 className="work-section_h3">Work Experience</h3>
                    <div className="work-section-divider"></div>
                </div>
                {workExperience.map((item) => WorkExperienceEntry(item, true))}
            </div>
        );
    }
}

export default WorkPreview;

WorkPreview.propTypes = {
    workExperience: PropTypes.array,
};
