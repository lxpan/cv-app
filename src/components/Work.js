import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Work.css';

function Work(props) {
    const { workInfo, handleInputChange, handleWorkSubmit } = props;

    function workInput(forVal, value, type = 'text') {
        return (
            <label htmlFor={forVal}>
                <input
                    type={type}
                    name={forVal}
                    value={value}
                    placeholder={forVal[0].toUpperCase() + forVal.substring(1)}
                    onChange={(event) => handleInputChange(event, 'workDetails')}
                />
            </label>
        );
    }

    function createWorkCreatorForm() {
        return (
            <form onSubmit={handleWorkSubmit}>
                {workInput('company', workInfo ? workInfo.company : '')}
                {workInput('position', workInfo ? workInfo.position : '')}
                {workInput('dateFrom', workInfo ? workInfo.dateFrom : '')}
                {workInput('dateTo', workInfo ? workInfo.dateTo : '')}
                {workInput('location', workInfo ? workInfo.location : '')}
                {workInput('description', workInfo ? workInfo.description : '')}
                <input type="submit" value="Add Experience" />
            </form>
        );
    }

    return (
        <div className="work-container">
            <h3>Work Details</h3>
            {createWorkCreatorForm()}
        </div>
    );
}

Work.propTypes = {
    workInfo: PropTypes.object,
    workExperience: PropTypes.array,
    handleInputChange: PropTypes.func,
    handleWorkSubmit: PropTypes.func,
};

export default Work;
