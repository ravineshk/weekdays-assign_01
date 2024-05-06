import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import JobCard from './JobCard';


function JobList({ minExp, companyName, location, remote, techStack, jobRole, minPay }) {
  // const [jobs, setJobs] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [totalCount, setTotalCount] = useState(0);
  // const [offset, setOffset] = useState(0);
  // const limit = 10;
  // const [displayedJobs, setDisplayedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10); // Change the limit as per your requirement
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchJobData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ limit, offset }),
        });

        const data = await response.json();
        setJobs(prevJobs => [...prevJobs, ...data.jdList]); // Append new data to existing jobs
        setTotalCount(data.totalCount);
        setOffset(prevOffset => prevOffset + limit); // Increment offset for next fetch
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobData();
  }, [limit, offset]);

  /*const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // user has scrolled to the bottom
      if (jobs.length < totalCount) {
        // If there are more jobs to fetch
        setLimit(prevLimit => prevLimit + 10); // Increase limit to fetch more data
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [jobs, totalCount]);

    // Infinite Scroll
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight && jobs.length < totalCount
      ) {
        setLimit((prevLimit) => prevLimit + 10); 
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [jobs, totalCount]);*/


  // useEffect(() => {
  //   const fetchJobData = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ limit, offset }),
  //       });

  //       const data = await response.json();
  //       setJobs(data.jdList); // Assuming jdList and totalCount are in the response
  //       setDisplayedJobs(data.jdList);
  //       setTotalCount(data.totalCount);
  //     } catch (error) {
  //       console.error('Error fetching jobs:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchJobData();
  // }, []);

  useEffect(() => {
    const filterJobs = async () => {
      let fjob = [];
      for(let i = 0; i < jobs.length; i++) { 
        if(minExp !== 0) {
          if(jobs[i].minExp > minExp) {
            fjob.push(jobs[i]);
          }
          continue;
        }
        if(companyName !== '') {
          console.log(jobs[i].companyName);
          console.log(companyName);
          if(jobs[i].companyName.includes(companyName)) {
            console.log(jobs[i].companyName);
            fjob.push(jobs[i]);
          }
          continue;
        }
        if(techStack !== '') {
          if(jobs[i].jobRole.includes(techStack)) {
            fjob.push(jobs[i]);
          }
          continue;
        }
        if(minPay !== 0) {
          if(minPay === 1 && jobs[i].minJdSalary > 20) {
            fjob.push(jobs[i]);
          }
          if(minPay === 2 && jobs[i].minJdSalary > 50) {
            fjob.push(jobs[i]);
          }
          if(minPay === 3 && jobs[i].minJdSalary > 70) {
            fjob.push(jobs[i]);
          }
          continue;
        }
        if(remote) {
          if(jobs[i].location === 'remote') {
            console.log(jobs[i].location);
          fjob.push(jobs[i]);
          }
        } else { 
          if(jobs[i].location === location.toLowerCase() || location === '') {
            fjob.push(jobs[i]);
          }
        }
      }
      console.log(fjob);
      if(fjob.length != 0) {
        console.log(fjob);
        setDisplayedJobs(fjob);
      }
    };
    filterJobs();
  }, [jobs, location, remote, minExp, companyName, techStack, minPay]);

  /*const handleLoadMore = () => {
    setOffset(offset + limit); 
  };*/
  

  return (
    <div>
      <Grid container spacing={8} sx={{ padding: '50px' }}>
        {jobs.map((job, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <JobCard jobData={job} />
          </Grid>
        ))}
      </Grid>
      {isLoading && <p>Loading more jobs...</p>}
    </div>
  );
}


export default JobList;