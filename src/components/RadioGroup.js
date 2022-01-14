import React from "react";

const options = [1, 2, 3, 4];
const RadioGroup = ({ currentVal, handleChange }) => {
  return (
    <div>
      <form action='#' onChange={(e) => console.log(e.target.checked)}>
        {options.map((val, index) => (
          <p key={index}>
            <label>
              <input
                name='group1'
                type='radio'
                checked={currentVal && currentVal === val}
                onChange={() => handleChange(val)}
              />
              <span>{val}</span>
            </label>
          </p>
        ))}
        <div className='btn' onClick={() => handleChange(0)}>
          Clear
        </div>
      </form>
    </div>
  );
};

export default RadioGroup;
