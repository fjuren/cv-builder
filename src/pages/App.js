import '../styles/App.css';

import EducationExpHooks from '../componentsHooks/EducationExpHooks';
import UserContactHooks from '../componentsHooks/UserContactHooks';
import WorkExpHooks from '../componentsHooks/WorkExpHooks';

function App() {
  return (
    <div className="App">
      <div className="body">
        <div>
          <h2>Build your own CV</h2>
        </div>

        {/* UserContact section */}
        <h3>Contact</h3>
        <UserContactHooks />
        
        {/* EducationExperience section */}
        <h3>Education Experience</h3>
        <EducationExpHooks />

        {/* WorkExperience section */}
        <h3>Work Experience</h3>
        <WorkExpHooks />

      </div>
    </div>
  );
}

export default App;