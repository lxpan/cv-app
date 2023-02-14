import React from 'react';
import Personal from './components/Personal';
import PersonalPreview from './components/PersonalPreview';
import Education from './components/Education';
import Work from './components/Work';
import './styles/App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            personalDetails: {
                name: 'Jane Doe',
                profession: 'Software Engineer',
                email: 'j.doe@mail.com',
                number: '555-555-555',
                location: 'Melbourne, AU',
                linkedin: 'linkedin.com/jdoe899',
                online: 'www.janedoeportfolio.com',
                blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, section) {
        const { name, value } = e.target;

        const sectionDetails = { ...this.state[section] };
        sectionDetails[name] = value;
        this.setState({ sectionDetails });

        // console.log(sectionDetails[name]);
        // console.log(sectionDetails);
    }

    render() {
        return (
            <div className="cv-grid">
                <div className="creator-container">
                    <Personal
                        personalInfo={this.state.personalDetails}
                        handleInputChange={this.handleChange}
                    />
                    <Work />
                    <Education />
                    <div className="creator-button-container">
                        <button>Edit</button>
                        <button>Submit</button>
                    </div>
                </div>

                <div className="preview-container">
                    <PersonalPreview personalInfo={this.state.personalDetails} />
                </div>
            </div>
        );
    }
}

export default App;
