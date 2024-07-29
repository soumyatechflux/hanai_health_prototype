import React from 'react';
import './report.css';
import heart from './heart.PNG';
import liver from './liver1.PNG';
import lung from './lung.PNG';
import kidney from './idne.PNG';
import pancreas from './anreas.PNG';
import product from './product.PNG';
import MainPage from '../MainPage/MainPage';
import Graph from './Graph'; // Import Graph component
import { CgAdd } from "react-icons/cg";
import Chart from 'chart.js/auto';
import { matchPath,useNavigate } from 'react-router-dom';

import Stack from '@mui/joy/Stack';
// import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

const Home = () => {
  const BMI_INFO = {
    bmi: '23.4',
    status: 'Normal',
    healthyRange: '18.5 kg/m2 - 25 kg/m2',
    healthyWeight: '47.4 kg - 64 kg',
    bmiPrime: '0.94',
    ponderalIndex: '14.6 kg/m3'
  };

  const DISEASES = [
    { name: 'High Cholesterol', percentage: '74%', imgSrc: heart },
    { name: 'Hepatitis', percentage: '86%', imgSrc: liver },
    { name: 'Asthma', percentage: '76%', imgSrc: lung },
    { name: 'Urinary Tract', percentage: '75%', imgSrc: kidney },
    { name: 'Diabetes', percentage: '89%', imgSrc: pancreas }
  ];

  const getGradientByPercentage = (percentage) => {
    const value = parseInt(percentage.replace('%', ''));
    return `conic-gradient(red ${value}%, white ${value}%)`;
  };

  const calculateProgress = (percentage) => {
    const r = 25; // radius of the circle
    const c = Math.PI * (r * 2);
    const pct = ((100 - percentage) / 100) * c;
    return pct;
  };

  const navigate = useNavigate();

  const handleAddDataClick = () => {
    navigate('/add_diseases');
  };

  const handleTakeLabTestClick = () => {
    navigate('/labreports');
  };
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [buttonLabel, setButtonLabel] = React.useState('Start');

  // const { value: value1, reset: resetValue1 } = useCountUp({
  //   isCounting: isLoading,
  //   duration: 1,
  //   start: 0,
  //   end: 25,
  //   onComplete: () => {
  //     setIsLoading(false);
  //     setButtonLabel('Reset');
  //   },
  // });

  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 75,
  });

  

  return (
    <>
      <MainPage />
      <div>
        <section className="content-section home-content-section py-3 pe-5">
          <div className="search-div">
            <div className="d-flex align-items-center complete-circle">
              <div className="circle-radius">
                <div className="circle">
                  <p style={{ marginBottom: '0rem', fontSize: 8 }}>BMI={BMI_INFO.bmi}</p>
                  <p style={{ marginBottom: '0rem', fontSize: 8 }}> {BMI_INFO.status}</p>
                </div>
              </div>
              <div className="ps-1">
                <p className="text_">Healthy BMI range: {BMI_INFO.healthyRange}</p>
                <p className="text_">Healthy weight for the height: {BMI_INFO.healthyWeight}</p>
                <p className="text_">BMI Prime: {BMI_INFO.bmiPrime}</p>
                <p className="text_">Ponderal Index: {BMI_INFO.ponderalIndex}</p>
              </div>

            </div>
            <form className="search-bar-rep">
              <input type="text" placeholder="Search" />
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
           {/* //NORMAL */}
          {/* <div className="diseases mt-3">
            {DISEASES.map((disease, index) => (
              <div className="disease" key={index}>
                <div className="info-disease">
                  <p className="name">{disease.name}</p>
                  <p className="percentage">{disease.percentage}</p>
                  <p className="is-match">Matched</p>
                </div>
                <div className="disease-img">
                  <div className="image-radius">
                    <img src={disease.imgSrc} alt={disease.name} className="disease-image" />
                  </div>
                </div>
              </div>
            ))}
          </div> */}

        {/* //background color change */}

        {/* <div className="diseases mt-3">
            {DISEASES.map((disease, index) => (
              <div className="disease" key={index}>
                <div className="info-disease">
                  <p className="name">{disease.name}</p>
                  <p className="percentage">{disease.percentage}</p>
                  <p className="is-match">Matched</p>
                </div>
                <div className="disease-img">
                  <div
                    className="image-radius"
                    style={{ color: getGradientByPercentage(disease.percentage) }}
                  >
                    <img src={disease.imgSrc} alt={disease.name} className="disease-image" />
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="diseases mt-3">
    {DISEASES.map((disease, index) => {
        const percentage = parseInt(disease.percentage, 10);
        // const backgroundColor = percentage > 86 ? '#f47575' : '#ffffff';

        return (
            <div className="disease" key={index}>
                <div className="info-disease" >
                    <p className="name">{disease.name}</p>
                    <p className="percentage">{disease.percentage}</p>
                    <p className="is-match">Matched</p>
                </div>
                <div className="disease-img" >
                    <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={8}>
                        <Stack spacing={3}>
                            <CircularProgress size="lg" determinate value={percentage}>
                                <img src={disease.imgSrc} alt={disease.name} className="disease-image" />
                            </CircularProgress>
                        </Stack>
                    </Stack>
                </div>
            </div>
        );
    })}
</div>
          
         

          {/* <section className="content-section py-3 pe-5">
                <div className="search-div">
                  <div className="d-flex align-items-center complete-circle">
                    <div className="circle-radius">
                      <div className="circle">
                        <p style={{ marginBottom: '0rem', fontSize: 8 }}>BMI={BMI_INFO.bmi}</p>
                        <p style={{ marginBottom: '0rem', fontSize: 8 }}>{BMI_INFO.status}</p>
                      </div>
                    </div>
                    <div className="ps-1">
                      <p className="text_">Healthy BMI range: {BMI_INFO.healthyRange}</p>
                      <p className="text_">Healthy weight for the height: {BMI_INFO.healthyWeight}</p>
                      <p className="text_">BMI Prime: {BMI_INFO.bmiPrime}</p>
                      <p className="text_">Ponderal Index: {BMI_INFO.ponderalIndex}</p>
                    </div>
                  </div>
                  <form className="search-bar-rep">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="diseases mt-3">
                  {DISEASES.map((disease, index) => (
                    <div className="disease" key={index}>
                      <div className="info-disease">
                        <p className="name">{disease.name}</p>
                        <p className="percentage">{disease.percentage}</p>
                        <p className="is-match">Matched</p>
                      </div>
                      <div className="disease-img">
                        <div className="image-radius">
                          <img src={disease.imgSrc} alt={disease.name} className="disease-image" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section> */}

          <div className="col-12 mt-4">

            <div className="row graph-row">
              <div className="col-md-6 table-responsive-sm graphhhh">
                <div className='row'>
                  <div className='col-6'>
                      <h4>Sugar Level</h4>
                  </div>
                  <div className='col-6 d-flex justify-content-end'>
                  <div onClick={handleAddDataClick}>
                    <CgAdd className='add-data-btn' />add data
                  </div>
                    
                  </div>
                </div>
                
                <div className="cell">
                  <Graph id="chart1" type="bar" />
                </div>
                
                <div className='col-12 '>
                  <div onClick={handleTakeLabTestClick}>
                      {/* <CgAdd className='add-data-btn' />add data */}
                      <button className='take-lab-test-btn'>Take a Lab Test</button>
                  </div>
                </div>
              



              </div>
              <div className="col-md-6 table-responsive-sm graphhhh">
                <h4 className='Activity-level-text'>Activity Level</h4>
                <div className="cell">
                  <Graph id="chart2" type="line" />
                </div>
                <div>
                      {/* <CgAdd className='add-data-btn' />add data */}
                      <button className='take-lab-test-btn'>Set a Goal</button>
                  </div>
            </div>
              </div>
              
            <h4 className="Head my-3">Diabetes Matching Data</h4>
            <div className="col-12 chart">
              <div className="row-head">
                <div className="col-md-4 row-data">
                  <p className="para-report p-r"> Diabetes-induced Complications</p>
                </div>
                <div className="col-md-4 row-data">
                  <p className="para-report p-r">Medication</p>
                </div>
                <div className="col-md-4 row-data">
                  <p className="para-report p-r">AI Recommendations</p>
                </div>
              </div>
              <hr className="head-hr" />
              <div className="row">
                <div className="col-md-4 row-data">
                  <div className="row-heading">
                    <p className="para-report"> Diabetes-induced Complications</p>
                    <hr />
                  </div>
                  {[
                    { name: 'High Blood Glucose', match: '96%' },
                    { name: 'Low Blood Glucose', match: '84%' },
                    { name: 'Arterial stiffness', match: '82%' },
                    { name: 'Hypertension', match: '81%' }
                  ].map((complication, index) => (
                    <React.Fragment key={index}>
                      <p className="para-report info_p">{complication.name}</p>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: complication.match }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <p className="info_">{complication.match} Match</p>
                    </React.Fragment>
                  ))}
                </div>
                <div className="col-md-4 row-data">
                  <div className="row-heading">
                    <p className="para-report">Medication</p>
                    <hr />
                  </div>
                  {[

                    { name: 'metformin-alogliptin (Kazano)' },
                    { name: 'insulin detemir (Levemir)', match: '96%' },
                    { name: 'insulin glargine' },
                    { name: 'sitagliptin (Januvia)', match: '84%' },
                    { name: 'ACE inhibitor' },
                    { name: 'Hydrochlorothiazide', match: '82%' },
                    { name: 'sildenafil' },
                    { name: 'Revatio', match: '81%' }
                  ].map((medication, index) => (
                    <div key={index}>
                      <div className="d-flex">
                        <p className="para-report info_p">{medication.name}</p>
                        <input type="button" value="Buy" className="buy-btn-sm" />
                      </div>

                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: medication.match }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      {/* <p className="info_">{medication.match} Match</p> */}
                      <p className="info_"></p>

                    </div>


                  ))}


                </div>


                <div className="col-md-4 row-data">
                  <div className="row-heading">
                    <p className="para-report">AI Recommendations</p>
                    <hr />
                  </div>

                  <div className="medicine">
                    <p className="info_">Arazo Nutrition Blood Sugar 365 Supplement–<br />
                      Supports Healthy Energy Levels -<br />
                      120 Herbal Pills - 60 Day Supply
                    </p>
                    <img className="prdt-img" src={product} alt="product" />
                    <input type="button" defaultValue="Buy" className="buy-btn" />
                  </div>

                </div>
              </div>
            </div>
          </div>
          <h1 />
        </section>
      </div>
    </>
  );
};

export default Home;
