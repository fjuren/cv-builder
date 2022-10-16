import '../styles/App.css';

// import UserContact from '../components/UserContact';
// import EducationExp from '../components/EducationExp';
import EducationExpHooks from '../componentsHooks/EducationExpHooks';
import UserContactHooks from '../componentsHooks/UserContactHooks';
import WorkExp from '../components/WorkExp';

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
        <WorkExp />

      </div>
    </div>
  );
}

export default App;