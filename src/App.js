import React from 'react';
import Creator from './components/Creator';
import Preview from './components/Preview';
import './styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="cv-grid">
                <Creator />
                <Preview />
            </div>
        );
    }
}

export default App;
