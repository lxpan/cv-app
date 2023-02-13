import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Work from './Work';
import '../styles/Creator.css';

class Creator extends React.Component {
    render() {
        return (
            <div className="creator-container">
                <Personal />
                <Work />
                <Education />
                <div className="creator-button-container">
                    <button>Edit</button>
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}

export default Creator;
