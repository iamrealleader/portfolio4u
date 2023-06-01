"use client"

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const handleButtonClick = (e) => {
      try {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
          setValue(eval(value));
        } else if (buttonValue === 'D') {
          setValue(value.slice(0, -1));
        } else if (buttonValue === 'C') {
          setValue('');
        } else {
          setValue(value + buttonValue);
        }
      } catch {
        setValue("Syntax error");
      }
    };

    const btns = document.querySelectorAll('.btn');
    Array.from(btns).forEach((button) => {
      button.addEventListener('click', handleButtonClick);
    });

    return () => {
      Array.from(btns).forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  }, [value]);

  const handleCahnge = (e) =>{
    setValue(e.target.value);
  }

  return (
    <>
      <style jsx global>{`
        .mob {
          width: 100vw;
          margin : 5rem 0rem;
          height: fit-content;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container {
          height: 400px;
          width: 350px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          background-color: white;
        }

        .rows {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .btn {
          height: 40px;
          width: 70px;
          margin: 4px;
          border: none;
          font-size: 24px;
          font-weight: bolder;
          border-radius: 5px;
        }

        .btn:hover {
          color: white;
          background-color: black;
        }

        #equal {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: 150px;
          color: white;
          background-color: rgb(35, 206, 35);
          font-size: 35px;
        }

        #equal:hover {
          background-color: blue;
        }

        #input {
          border-radius: 10px;
          font-size: 30px;
          margin: 10px;
          height: 60px;
          width: 300px;
          border: none;
        }

        .green {
          color: rgb(12, 33, 153);
        }
      `}</style>

      <div className="mob">
        <div className="container shadow-lg rounded-lg bg-white">
          <div className="rows">
            <input className='bg-slate-100' onChange={handleCahnge} name='imput' value={value} type="text" id="input" />
          </div>
          <div className="rows">
            <button className="btn green">*</button>
            <button className="btn green">/</button>
            <button className="btn green">D</button>
            <button className="btn green">C</button>
          </div>
          <div className="rows">
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn green">-</button>
          </div>
          <div className="rows">
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn green">+</button>
          </div>
          <div className="rows">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn green">.</button>
          </div>
          <div className="rows">
            <button className="btn green">%</button>
            <button className="btn">0</button>
            <button className="btn" id="equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
