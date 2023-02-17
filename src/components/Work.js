import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Work.css';

class Work extends React.Component {
    render() {
        const { workInfo, handleInputChange, handleWorkSubmit } = this.props;

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
                    {workInput('company', workInfo.company)}
                    {workInput('position', workInfo.position)}
                    {workInput('dateFrom', workInfo.dateFrom)}
                    {workInput('dateTo', workInfo.dateTo)}
                    {workInput('location', workInfo.location)}
                    {workInput('description', workInfo.description)}
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
}

export default Work;

Work.propTypes = {
    workInfo: PropTypes.object,
    workExperience: PropTypes.array,
    handleInputChange: PropTypes.func,
    handleWorkSubmit: PropTypes.func,
};
