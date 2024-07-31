import React from 'react';
import ReactDOM from 'react-dom';
import RulerPicker from './RularPicker/RularPicker';

const RularTry = () => {

  
    const handleValueChange = (number) => {
        console.log('Current Value:', number);
      };
    
      const handleValueChangeEnd = (number) => {
        console.log('Final Value:', number);
      };
    
      return (
        <div>
          <RulerPicker
            min={0}
            max={240}
            step={1}
            initialValue={0}
            onValueChange={handleValueChange}
            onValueChangeEnd={handleValueChangeEnd}
            unit="cm"
          />
        </div>
      )
    };

export default RularTry