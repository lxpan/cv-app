import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Work from './Work';
import '../styles/Creator.css';

class Creator extends React.Component {
    constructor() {
        super();
        this.state = {
            personalDetails: {
                name: 'Jane Doe',
                email: 'j.doe@mail.com',
                number: '555-555-555',
                location: 'Melbourne, AU',
                linkedin: 'linkedin.com/jdoe899',
                online: 'www.janedoeportfolio.com',
                blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        };
    }

    render() {
        return (
            <div className="creator-container">
                <Personal personalInfo={this.state.personalDetails} />
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
