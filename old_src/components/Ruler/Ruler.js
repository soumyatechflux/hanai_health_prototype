import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ruler.css';
import Age from './img/Age.PNG';
import Height from './img/height.PNG';
import Weight from './img/weight.PNG';

const Ruler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('js');

    const inputs = document.querySelectorAll('input[type="range"]');
    const inputListeners = [];

    inputs.forEach((input) => {
      const listener = (e) => {
        const target = e.target;
        target.parentNode.style.setProperty('--val', target.value);
        target.nextElementSibling.value = target.value;
      };
      input.addEventListener('input', listener);
      inputListeners.push({ input, listener });
    });

    return () => {
      inputListeners.forEach(({ input, listener }) => {
        input.removeEventListener('input', listener);
      });
    };
  }, []);

  const handleNext = () => {
    navigate('/interest');
  };

  return (
    <>
    <div>
      <section className="content-rular py-3 pe-5">
        <header>BMI Calculator</header>
        <div className="mainnnnnnnnnnn">
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Height} alt="height" className="image" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm">
              <form style={{ '--min': 140, '--val': 165, '--max': 190, '--n': 10 }}>
                <label className='lable' htmlFor="height-range">Height</label>
                <input className='ruler-input' id="height-range" type="range" defaultValue="165" list="height-list" />
                <output className='ruler-output' htmlFor="height-range">165</output>
                <datalist id="height-list">
                  <option className='rular-option'>140</option>
                  <option className='rular-option'>145</option>
                  <option className='rular-option'>150</option>
                  <option className='rular-option'>155</option>
                  <option className='rular-option'>160</option>
                  <option className="mid">165</option>
                  <option className='rular-option'>170</option>
                  <option className='rular-option'>175</option>
                  <option className='rular-option'>180</option>
                  <option className='rular-option'>185</option>
                  <option className='rular-option'>190</option>
                </datalist>
              </form>
            </div>
          </div>
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Weight} alt="weight" className="image" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm">
              <form style={{ '--min': 10, '--val': 50, '--max': 110, '--n': 10 }}>
                <label className='lable' htmlFor="weight-range">Weight</label>
                <input className='ruler-input' id="weight-range" type="range" defaultValue="50" list="weight-list" />
                <output className='ruler-output' htmlFor="weight-range">50</output>
                <datalist id="weight-list">
                  <option className='rular-option'>10</option>
                  <option className='rular-option'>20</option>
                  <option className='rular-option'>30</option>
                  <option className='rular-option'>40</option>
                  <option className="mid">50</option>
                  <option className='rular-option'>60</option>
                  <option className='rular-option'>70</option>
                  <option className='rular-option'>80</option>
                  <option className='rular-option'>90</option>
                  <option className='rular-option'>100</option>
                  <option className='rular-option'>110</option>
                </datalist>
              </form>
            </div>
          </div>
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Age} alt="age" className="image img3" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm">
              <form style={{ '--min': 10, '--val': 40, '--max': 110, '--n': 10 }}>
                <label className='lable' htmlFor="age-range">Age</label>
                <input className='ruler-input' id="age-range" type="range" defaultValue="40" list="age-list" />
                <output className='ruler-output' htmlFor="age-range">40</output>
                <datalist id="age-list">
                  <option className='rular-option'>10</option>
                  <option className='rular-option'>20</option>
                  <option className='rular-option'>30</option>
                  <option className='rular-option'>40</option>
                  <option className='rular-option'>50</option>
                  <option className="mid">60</option>
                  <option className='rular-option'>70</option>
                  <option className='rular-option'>80</option>
                  <option className='rular-option'>90</option>
                  <option className='rular-option'>100</option>
                  <option className='rular-option'>110</option>
                </datalist>
              </form>
            </div>
          </div>
        </div>
        <button className="btn-start" onClick={handleNext}>Calculate</button>
      </section>
      </div>
    </>
  );
};

export default Ruler;
