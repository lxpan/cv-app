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
                linkedin: 'linked.in/jane.doe',
                online: 'www.janedoeportfolio.com',
                blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            workDetails: {
                company: 'Acme Corp',
                position: 'Product Tester',
                dateFrom: 'June, 2020',
                dateTo: 'February, 2021',
                location: 'Acme City',
                description: 'Survived the testing of over 100 products',
            },
            workExperience: [],
            workExperienceCounter: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleWorkSubmit = this.handleWorkSubmit.bind(this);
    }

    handleChange(e, section) {
        const { name, value } = e.target;

        // create a dummy object to perform changes on
        const sectionDetails = { ...this.state[section] };
        // update value on dummy object
        sectionDetails[name] = value;
        // replace section details object with dummy object
        this.setState({ [section]: sectionDetails });

        // console.log(this.state[section]);
    }

    handleWorkSubmit(e) {
        e.preventDefault();

        // increment work experience counter
        const newIndex = this.state.workExperienceCounter + 1;
        this.setState({ workExperienceCounter: newIndex });

        const newWorkExperience = { ...this.state.workDetails };
        // assign counter as the id
        newWorkExperience.id = newIndex;

        this.setState({
            workExperience: [...this.state.workExperience, newWorkExperience],
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.workExperience.length !== prevState.workExperience.length) {
            console.log(this.state.workExperience);
        }
    }

    render() {
        return (
            <div className="cv-grid">
                <div className="creator-container">
                    <Personal
                        personalInfo={this.state.personalDetails}
                        handleInputChange={this.handleChange}
                    />
                    <Work
                        workInfo={this.state.workDetails}
                        handleInputChange={this.handleChange}
                        handleWorkSubmit={this.handleWorkSubmit}
                    />
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
