import React from 'react';
import PropTypes from 'prop-types';
// import { LoremIpsum } from 'lorem-ipsum';
import '../styles/EducationPreview.css';

class EducationPreview extends React.Component {
    render() {
        const { educationExperience } = this.props;

        // const lorem = new LoremIpsum();

        function renderStudy(eduItem) {
            let render;
            if (eduItem.major && eduItem.minor) {
                render = (
                    <>
                        <div className="program-minor-major">Major: {eduItem.major}</div>
                        <div className="program-minor-major">Minor: {eduItem.minor}</div>
                    </>
                );
            }
            else if (eduItem.major) {
                render = <div className="program-minor-major">Major: {eduItem.major}</div>;
            }
            else if (eduItem.minor) {
                render = <div className="program-minor-major">Minor: {eduItem.minor}</div>;
            }
            return render;
        }

        function educationExperienceEntry(eduItem) {
            return (
                <div className="education-experience-item" key={eduItem.id}>
                    <div className="provider-heading">
                        <b>{eduItem.provider}</b>
                        <span className="company-location_span">{eduItem.location}</span>
                    </div>
                    <div className="program-name-and-tenure">
                        <div className="program-name">{eduItem.program.toUpperCase()}</div>
                        <span className="program-dateRange">
                            {eduItem.dateFrom} - {eduItem.dateTo}
                        </span>
                    </div>
                    {renderStudy(eduItem)}
                    {/* <div className="program-minor-major">Major: {eduItem.major}</div>

                    <div className="program-minor-major">Minor: {eduItem.minor}</div> */}
                </div>
            );
        }

        return (
            <div className="education-preview-container">
                <div className="education-section-heading">
                    <h3 className="education-section_h3">Education Experience</h3>
                    <div className="education-section-divider"></div>
                </div>

                {educationExperience.map((item) => educationExperienceEntry(item))}
            </div>
        );
    }
}

export default EducationPreview;

EducationPreview.propTypes = {
    educationExperience: PropTypes.array,
};
