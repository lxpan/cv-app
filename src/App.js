import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { LoremIpsum } from 'lorem-ipsum';
import html2canvas from 'html2canvas';
import Personal from './components/Personal';
import PersonalPreview from './components/PersonalPreview';
import Work from './components/Work';
import WorkPreview from './components/WorkPreview';
import Education from './components/Education';
import EducationPreview from './components/EducationPreview';
import './styles/App.css';

const lorem = new LoremIpsum();

const defaultWorkExperienceB = {
    company: 'Acme Corp',
    position: 'Product Tester',
    dateFrom: 'June, 2020',
    dateTo: 'February, 2021',
    location: 'Acme City',
    description: lorem.generateSentences(5),
    id: 1,
};

const defaultWorkExperienceA = {
    company: 'Mega Corp',
    position: 'Software Guy',
    dateFrom: 'February, 2021',
    dateTo: 'Present',
    location: 'Acme City',
    description: lorem.generateSentences(5),
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

function App() {
    const [personalDetails, setPersonalDetails] = useState({
        name: 'Jane Doe',
        profession: 'Software Engineer',
        email: 'j.doe@mail.com',
        number: '555-555-555',
        location: 'Melbourne, AU',
        linkedin: 'linked.in/jane.doe',
        online: 'www.janedoeportfolio.com',
        blurb: lorem.generateSentences(5),
    });

    // work state variables
    const [workDetails, setWorkDetails] = useState(null);
    const [workExperience, setWorkExperience] = useState([
        defaultWorkExperienceA,
        defaultWorkExperienceB,
    ]);
    const [workExperienceCounter, setWorkExperienceCounter] = useState(1);
    // education state variables
    const [educationDetails, setEducationDetails] = useState(null);
    const [educationExperience, setEducationExperience] = useState([defaultEducationExperience]);
    const [educationExperienceCounter, setEducationExperienceCounter] = useState(0);

    function resetWorkFormInput() {
        const emptyWorkDetails = {
            company: '',
            position: '',
            dateFrom: '',
            dateTo: '',
            location: '',
            description: '',
        };

        setWorkDetails(emptyWorkDetails);

        const inputs = Array.from(document.querySelectorAll('.work-container input'));
        inputs.forEach((input) => {
            input.value = '';
        });
    }

    function resetEducationFormInput() {
        const emptyEducationDetails = {
            provider: '',
            location: '',
            program: '',
            major: '',
            dateFrom: '',
            dateTo: '',
        };

        setEducationDetails(emptyEducationDetails);

        const inputs = Array.from(document.querySelectorAll('.education-container input'));
        inputs.forEach((input) => {
            input.value = '';
        });
    }

    function handleChange(e, section) {
        const { name, value } = e.target;

        const stateSectionMap = {
            personalDetails: [personalDetails, setPersonalDetails],
            workDetails: [workDetails, setWorkDetails],
            educationDetails: [educationDetails, setEducationDetails],
        };
        const get = 0;
        const set = 1;

        const sectionDetails = { ...stateSectionMap[section][get] };
        sectionDetails[name] = value;
        stateSectionMap[section][set](sectionDetails);
    }

    function handleWorkSubmit(e) {
        e.preventDefault();

        // check if currently in memory object already exists in the array
        const filter = workExperience.filter((item) => item.id === workDetails.id);

        if (filter.length > 0) {
            // create a deep clone of the existing array
            const newWorkExperienceArray = structuredClone(workExperience);
            const mutatedWorkArray = newWorkExperienceArray.map((workItem) => {
                // append the modified object in place of the old object
                if (workItem.id === workDetails.id) {
                    return workDetails;
                }
                return workItem;
            });

            setWorkExperience(mutatedWorkArray);
        }
        else {
            // increment work experience counter
            const newIndex = workExperienceCounter + 1;
            setWorkExperienceCounter(newIndex);

            const newWorkExperience = { ...workDetails };
            // assign counter as the id
            newWorkExperience.id = newIndex;

            setWorkExperience([...workExperience, newWorkExperience]);
        }
        resetWorkFormInput();
    }

    function handleEducationSubmit(e) {
        e.preventDefault();

        // check if currently in memory object already exists in the array
        const filter = educationExperience.filter((item) => item.id === educationDetails.id);

        if (filter.length > 0) {
            // create a deep clone of the existing array
            const newEducationExperienceArray = structuredClone(educationExperience);
            const mutatedEducationArray = newEducationExperienceArray.map((eduItem) => {
                // append the modified object in place of the old object
                if (eduItem.id === educationDetails.id) {
                    return educationDetails;
                }
                return eduItem;
            });

            setEducationExperience(mutatedEducationArray);
        }
        else {
            // increment work experience counter
            const newIndex = educationExperienceCounter + 1;
            setEducationExperienceCounter(newIndex);

            const newEducationExperience = { ...educationDetails };
            // assign counter as the id
            newEducationExperience.id = newIndex;

            setEducationExperience([...educationExperience, newEducationExperience]);
        }
        resetEducationFormInput();
    }

    function handleWorkEdit(e, id) {
        const workItem = workExperience.filter((exp) => exp.id === id);
        setWorkDetails(workItem[0]);
    }

    function handleEducationEdit(e, id) {
        const eduItem = educationExperience.filter((exp) => exp.id === id);
        setEducationDetails(eduItem[0]);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.workExperience.length !== prevState.workExperience.length) {
    //         console.log(this.state.workExperience);
    //         console.log(this.state.workDetails);
    //     }

    //     if (this.state.educationExperience.length !== prevState.educationDetails.length) {
    //         console.log(this.state.educationExperience);
    //         console.log(this.state.educationDetails);
    //     }
    // }

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
                <Personal personalInfo={personalDetails} handleInputChange={handleChange} />
                <Work
                    workInfo={workDetails}
                    handleInputChange={handleChange}
                    handleWorkSubmit={handleWorkSubmit}
                />
                <Education
                    educationInfo={educationDetails}
                    handleInputChange={handleChange}
                    handleEducationSubmit={handleEducationSubmit}
                />
                <div className="creator-button-container">
                    <button id="savePdfBtn" onClick={generatePDF}>
                        Save Preview as PDF
                    </button>
                </div>
            </div>

            <div className="preview-container" id="previewCV">
                <PersonalPreview personalInfo={personalDetails} />
                <WorkPreview workExperience={workExperience} handleWorkEdit={handleWorkEdit} />
                <EducationPreview
                    educationExperience={educationExperience}
                    handleEducationEdit={handleEducationEdit}
                />
            </div>
        </div>
    );
}

export default App;
