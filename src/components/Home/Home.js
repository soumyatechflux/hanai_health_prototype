import React from 'react';
import './report.css';
import heart from './heart.PNG';
import liver from './liver1.PNG';
import lung from './lung.PNG';
import kidney from './idne.PNG';
import pancreas from './anreas.PNG';
import product from './product.PNG';
import Main from '../main/Main';
import Graph from './Graph'; // Import Graph component
import Chart from 'chart.js/auto';
import { matchPath } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Main />
      <div>
        <section className="content-section py-3 pe-5">
          <div className="search-div">
            <div className="d-flex align-items-center complete-circle">
              <div className="circle-radius">
                <div className="circle">
                  <p style={{ marginBottom: '0rem', fontSize: 8 }}>BMI=23.4</p>
                  <p style={{ marginBottom: '0rem', fontSize: 8 }}> Normal</p>
                </div>
              </div>
              <div className="ps-1">
                <p className="text_">Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</p>
                <p className="text_"> Healthy weight for the height: 47.4 kg - 64 kg</p>
                <p className="text_">   BMI Prime: 0.94</p>
                <p className="text_">   Ponderal Index: 14.6 kg/m3</p>
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
            {[
              { name: 'High Cholesterol', percentage: '74%', imgSrc: heart },
              { name: 'Hepatitis', percentage: '86%', imgSrc: liver },
              { name: 'Asthma', percentage: '76%', imgSrc: lung },
              { name: 'Urinary Tract', percentage: '75%', imgSrc: kidney },
              { name: 'Diabetes', percentage: '89%', imgSrc: pancreas }
            ].map((disease, index) => (
              <div className="disease" key={index}>
                <div className="info-disease">
                  <p className="name">{disease.name}</p>
                  <p className="percentage">{disease.percentage}</p>
                  <p className="is-match">Matched</p>
                </div>
                <div className="disease-img">
                  <div className="image-radius">
                    <img src={disease.imgSrc} alt="disease" className="disease-image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12">
           
            <div className="row graph-row">
              <div className="col-md-6 table-responsive-sm graphhhh">
              <h4>Sugar Level</h4>
                <div className="cell">
                  <Graph id="chart1" type="bar" />
                </div>
           
               

              </div>
              <div className="col-md-6 table-responsive-sm graphhhh">
              <h4>Activity Level</h4>
                <div className="cell">
                  <Graph id="chart2" type="line" />
                </div>
              </div>
            </div>
            <header className="Head">Diabetes Matching Data</header>
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

                    {name:'metformin-alogliptin (Kazano)'},
                    {name:'insulin detemir (Levemir)',match:'96%'},
                    {name:'insulin glargine'},
                    {name:'sitagliptin (Januvia)',match:'84%'},
                    {name:'ACE inhibitor'},
                    {name:'Hydrochlorothiazide',match:'82%'},
                    {name:'sildenafil'},
                    {name:'Revatio',match:'81%'}
                  ].map((medication, index) => (
                    <div  key={index}>
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
