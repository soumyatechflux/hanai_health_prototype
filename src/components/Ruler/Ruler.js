import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ruler.css';

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
      <section className="content py-3 pe-5">
        <header>BMI Calculator</header>
        <div className="mainnnnnnnnnnn">
          <div className="row">
            <div className="col-3">
              <img src="img/height.PNG" alt="height" className="image" />
            </div>
            <div className="col-9 scale table-responsive-sm">
              <form style={{ '--min': 0, '--val': 38, '--max': 100, '--n': 10 }}>
                <label htmlFor="height-range">Height</label>
                <input id="height-range" type="range" defaultValue="38" list="height-list" />
                <output htmlFor="height-range"></output>
                <datalist id="height-list">
                  <option>140</option>
                  <option>145</option>
                  <option>150</option>
                  <option>155</option>
                  <option>160</option>
                  <option className="mid">165</option>
                  <option>170</option>
                  <option>175</option>
                  <option>180</option>
                  <option>185</option>
                  <option>190</option>
                </datalist>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src="img/weight.PNG" alt="weight" className="image" />
            </div>
            <div className="col-9 scale table-responsive-sm">
              <form style={{ '--min': 0, '--val': 38, '--max': 100, '--n': 10 }}>
                <label htmlFor="weight-range">Weight</label>
                <input id="weight-range" type="range" defaultValue="38" list="weight-list" />
                <output htmlFor="weight-range"></output>
                <datalist id="weight-list">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option className="mid">50</option>
                  <option>60</option>
                  <option>70</option>
                  <option>80</option>
                  <option>90</option>
                  <option>100</option>
                  <option>110</option>
                </datalist>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src="img/Age.PNG" alt="age" className="image" />
            </div>
            <div className="col-9 scale table-responsive-sm">
              <form style={{ '--min': 10, '--val': 38, '--max': 110, '--n': 10 }}>
                <label htmlFor="age-range">Age</label>
                <input id="age-range" type="range" defaultValue="38" list="age-list" />
                <output htmlFor="age-range"></output>
                <datalist id="age-list">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                  <option className="mid">60</option>
                  <option>70</option>
                  <option>80</option>
                  <option>90</option>
                  <option>100</option>
                  <option>110</option>
                </datalist>
              </form>
            </div>
          </div>
        </div>
        <button className="btn-start" onClick={handleNext}>Next</button>
      </section>
    </>
  );
};

export default Ruler;
