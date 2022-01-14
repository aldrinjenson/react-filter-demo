import React, { useState } from "react";
import Dashboard from "./Dashboard";
import RadioGroup from "./RadioGroup";

const questions = [
  {
    q: "How important is comfortability?",
    key: "comfort",
  },
  {
    q: "How important is quality?",
    key: "quality",
  },
  {
    q: "How important is rating?",
    key: "rating",
  },
  {
    q: "How important is service?",
    key: "service",
  },
];
const Layout = ({ products }) => {
  const [filters, setFilters] = useState({});
  console.log(filters);
  return (
    <div>
      <div className='row'>
        <div className='col s12 m4'>
          <ul style={{ height: "85vh", overflow: "auto", overflowX: "hidden" }}>
            {questions.map(({ q, key }, index) => (
              <li key={index}>
                <h5>{q}</h5>
                <RadioGroup
                  currentVal={filters[key]}
                  handleChange={(val) =>
                    setFilters((currFilters) => ({
                      ...currFilters,
                      [key]: val,
                    }))
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='col s12 m8'>
          <Dashboard products={products} filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
