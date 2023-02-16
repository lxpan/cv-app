import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Personal from './components/Personal';
import PersonalPreview from './components/PersonalPreview';
import Work from './components/Work';
import WorkPreview from './components/WorkPreview';
import Education from './components/Education';
import EducationPreview from './components/EducationPreview';
import './styles/App.css';

const defaultWorkExperience = {
    company: 'Acme Corp',
    position: 'Product Tester',
    dateFrom: 'June, 2020',
    dateTo: 'February, 2021',
    location: 'Acme City',
    description: 'Survived the testing of over 100 products',
    id: 0,
};

const defaultEducationExperience = {
    provider: 'University of Hard Knocks',
    location: 'Acme City',
    program: 'Bachelor of InfoTech',
    major: 'Web Development',
    minor: 'Machine Learning',
    dateFrom: 'January, 2022',
    dateTo: 'March, 2023',
    id: 0,
};

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
            workDetails: defaultWorkExperience,
            workExperience: [defaultWorkExperience],
            workExperienceCounter: 0,
            educationDetails: defaultEducationExperience,
            educationExperience: [defaultEducationExperience],
            educationExperienceCounter: 0,
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleWorkSubmit = this.handleWorkSubmit.bind(this);
        this.handleEducationSubmit = this.handleEducationSubmit.bind(this);

        this.resetWorkFormInput = this.resetWorkFormInput.bind(this);
        this.resetEducationFormInput = this.resetEducationFormInput.bind(this);
    }

    resetWorkFormInput() {
        const emptyWorkDetails = {
            company: '',
            position: '',
            dateFrom: '',
            dateTo: '',
            location: '',
            description: '',
        };

        this.setState({ workDetails: emptyWorkDetails });

        const inputs = Array.from(document.querySelectorAll('.work-container input'));
        inputs.forEach((input) => {
            input.value = '';
        });
    }

    resetEducationFormInput() {
        const emptyEducationDetails = {
            provider: '',
            location: '',
            program: '',
            major: '',
            dateFrom: '',
            dateTo: '',
        };

        this.setState({ educationDetails: emptyEducationDetails });

        const inputs = Array.from(document.querySelectorAll('.education-container input'));
        inputs.forEach((input) => {
            input.value = '';
        });
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

        this.resetWorkFormInput();
    }

    handleEducationSubmit(e) {
        e.preventDefault();

        // increment work experience counter
        const newIndex = this.state.educationExperienceCounter + 1;
        this.setState({ educationExperienceCounter: newIndex });

        const newEducationExperience = { ...this.state.educationDetails };
        // assign counter as the id
        newEducationExperience.id = newIndex;

        this.setState({
            educationExperience: [...this.state.educationExperience, newEducationExperience],
        });

        this.resetEducationFormInput();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.workExperience.length !== prevState.workExperience.length) {
            console.log(this.state.workExperience);
            console.log(this.state.workDetails);
        }

        if (this.state.educationExperience.length !== prevState.educationDetails.length) {
            console.log(this.state.educationExperience);
            console.log(this.state.educationDetails);
        }
    }

    render() {
        function generatePDF() {
            const input = document.getElementById('previewCV');
            html2canvas(input).then((canvas) => {
                const image = canvas.toDataURL('image/jpeg', 1.0);
                const doc = new jsPDF('p', 'px', 'a4');
                const pageWidth = doc.internal.pageSize.getWidth();
                const pageHeight = doc.internal.pageSize.getHeight();

                const widthRatio = pageWidth / canvas.width;
                const heightRatio = pageHeight / canvas.height;
                const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

                const canvasWidth = canvas.width * ratio;
                const canvasHeight = canvas.height * ratio;

                const marginX = (pageWidth - canvasWidth) / 2;
                // const marginY = (pageHeight - canvasHeight) / 2;
                const marginY = 30;

                doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
                doc.output('dataurlnewwindow');
            });
        }

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
                    <Education
                        educationInfo={this.state.educationDetails}
                        handleInputChange={this.handleChange}
                        handleEducationSubmit={this.handleEducationSubmit}
                    />
                    <div className="creator-button-container">
                        <button id="savePdfBtn" onClick={generatePDF}>
                            Save Preview as PDF
                        </button>
                    </div>
                </div>

                <div className="preview-container" id="previewCV">
                    <PersonalPreview personalInfo={this.state.personalDetails} />
                    <WorkPreview workExperience={this.state.workExperience} />
                    <EducationPreview educationExperience={this.state.educationExperience} />
                </div>
            </div>
        );
    }
}

export default App;
