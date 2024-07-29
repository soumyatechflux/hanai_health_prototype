// src/RulerPicker.js
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './RularPicker.css';
import Age from './../../img/Age.PNG';
import Height from './../../img/height.PNG';
import Weight from './../../img/weight.PNG';
import { useNavigate } from 'react-router-dom';

const RulerPicker = () => {
  const [age, setAge] = useState(50);
  const [height, setHeight] = useState(125);
  const [weight, setWeight] = useState(100);
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/interest');
  };
  return (
    <>
      {/* <div className="ruler-picker">
        <div className="ruler-section">
          <h6 className='pt-2'>Height</h6>
          <div className="ruler-scale">
            <Slider
              min={1}
              max={250}
              step={1}
              value={height}
              onChange={setHeight}
              railStyle={{ height: 50 }}
              trackStyle={{ height: 10, backgroundColor: 'transparent' }}
              handleStyle={{
                height: 0,
                width: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '20px solid red',
                marginLeft: -10,
                marginTop: -5,
              }}
            />
            <div className="value">{height} cm</div>
          </div>
        </div>


        <div className="ruler-section">
          <h6 className='pt-2'>Height</h6>
          <div className="ruler-scale">
            <Slider
              min={1}
              max={250}
              step={1}
              value={height}
              onChange={setHeight}
              railStyle={{ height: 50 }}
              trackStyle={{ height: 10, backgroundColor: 'transparent' }}
              handleStyle={{
                height: 0,
                width: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '20px solid red',
                marginLeft: -10,
                marginTop: -5,
              }}
            />
            <div className="value">{height} cm</div>
          </div>
        </div>

        
        <div className="ruler-section">
          <h6 className='pt-2'>Age</h6>
          <div className="ruler-scale">
            <Slider
              min={1}
              max={100}
              step={1}
              value={age}
              onChange={setAge}
              railStyle={{ height: 50 }}
              trackStyle={{ height: 10, backgroundColor: 'transparent' }}
              handleStyle={{
                height: 0,
                width: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '20px solid red',
                marginLeft: -10,
                marginTop: -5,
        
              }}
            />
            <div className="value">{age} year</div>
          </div>
        </div>
      </div> */}

      <section className="content-rular py-3 px-5">
        <header style={{textAlign:'center' , fontSize:'25px'}} className='py-3'>BMI Calculator</header>
        <div className="container-fluid main-container">
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Height} alt="height" className="image" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm pb-3">
              <div className="ruler-section">
                <h6 className='pt-2'>Height</h6>
                <div className="ruler-scale">
                  <Slider
                    min={1}
                    max={250}
                    step={1}
                    value={height}
                    onChange={setHeight}
                    railStyle={{ height: 50 }}
                    trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                    handleStyle={{
                      height: 0,
                      width: 0,
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: '20px solid red',
                      marginLeft: -10,
                      marginTop: -5,
                    }}
                  />
                  <div className="value">{height} cm</div>
                  {console.log(height)}
                </div>
              </div>
            </div>
          </div>
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Weight} alt="weight" className="image" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm pb-3">
              <div className="ruler-section">
                <h6 className='pt-2'>Weight</h6>
                <div className="ruler-scale">
                  <Slider
                    min={1}
                    max={200}
                    step={1}
                    value={weight}
                    onChange={setWeight}
                    railStyle={{ height: 50 }}
                    trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                    handleStyle={{
                      height: 0,
                      width: 0,
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: '20px solid red',
                      marginLeft: -10,
                      marginTop: -5,
                    }}
                  />
                  <div className="value">{weight} kg</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Age} alt="age" className="image img3" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm pb-3">
              <div className="ruler-section">
                <h6 className='pt-2'>Age</h6>
                <div className="ruler-scale">
                  <Slider
                    min={1}
                    max={100}
                    step={1}
                    value={age}
                    onChange={setAge}
                    railStyle={{ height: 50 }}
                    trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                    handleStyle={{
                      height: 0,
                      width: 0,
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: '20px solid red',
                      marginLeft: -10,
                      marginTop: -5,

                    }}
                  />
                  <div className="value">{age} year</div>
                </div>
              </div>
            </div>
          </div>
          <div className='' style={{ float:'right', marginTop:'30px'}}><button className="btn-start mt-2" onClick={handleNext}>Calculate</button></div>
          
        </div>
        
      </section>

    </>
  );
};

export default RulerPicker;
