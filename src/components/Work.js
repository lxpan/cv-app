import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Work.css';

class Work extends React.Component {
    render() {
        const { workInfo, handleInputChange } = this.props;

        function workInput(forVal, defaultVal, type = 'text') {
            return (
                <label htmlFor={forVal}>
                    <input
                        type={type}
                        name={forVal}
                        defaultValue={defaultVal}
                        onChange={(event) => handleInputChange(event, 'workDetails')}
                    />
                </label>
            );
        }

        return (
            <div className="personal-container">
                <h3>Work Details</h3>
                {workInput('company', workInfo.company)}
                {workInput('position', workInfo.position)}
                {workInput('dateFrom', workInfo.dateFrom)}
                {workInput('dateTo', workInfo.dateTo)}
                {workInput('location', workInfo.location)}
                {workInput('description', workInfo.description)}
            </div>
        );
    }
}

export default Work;

Work.propTypes = {
    workInfo: PropTypes.object,
    handleInputChange: PropTypes.func,
};
