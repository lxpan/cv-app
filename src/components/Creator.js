import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Work from './Work';

class Creator extends React.Component {
    render() {
        return (
            <div className="creator-container">
                <h1>Creator Component</h1>
                <Personal />
                <Education />
                <Work />
            </div>
        );
    }
}

export default Creator;
