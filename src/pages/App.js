import '../styles/App.css';

import UserContact from '../components/UserContact';
import EducationExp from '../components/EducationExp';
import WorkExp from '../components/WorkExp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Build your own CV</h2>
        </div>

        {/* UserContact section */}
        <UserContact />

        {/* EducationExperience section */}
        <EducationExp />

        {/* WorkExperience section */}
        <WorkExp />

      </header>
    </div>
  );
}

export default App;