import React from 'react';
import JobList from './JobList'; // Assuming JobList is in a separate file
import Filters from './Filters';
import { useState } from 'react';

function App() {

  const [minExp, setMinExpFilter] = useState(0);
  const [companyName, setCompanyNameFilter] = useState('');
  const [location, setLocationFilter] = useState('');
  const [remote, setRemoteFilter] = useState(false);
  const [techStack, setTechStackFilter] = useState('');
  const [jobRole, setRoleFilter] = useState('');
  const [minPay, setMinPayFilter] = useState(0);

  return (
    <div className="App">
      <Filters setMinExpFilter={setMinExpFilter}
        setCompanyNameFilter={setCompanyNameFilter}
        setLocationFilter={setLocationFilter}
        setRemoteFilter={setRemoteFilter}
        setTechStackFilter={setTechStackFilter}
        setRoleFilter={setRoleFilter}
        minExp={minExp}
        companyName={companyName}
        location={location}
        remote={remote}
        techStack={techStack}
        jobRole={jobRole}
        minPay={minPay}
        setMinPayFilter={setMinPayFilter}/>
      <JobList 
      minExp={minExp}
      companyName={companyName}
      location={location}
      remote={remote}
      techStack={techStack}
      jobRole={jobRole}
      minPay={minPay}/>
    </div>
  );
}

export default App;
