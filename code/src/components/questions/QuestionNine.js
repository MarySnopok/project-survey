import React, { useState } from "react";

export const QuestionNine = () => {
  const [selectedOption, setState] = useState("5");

  console.log("selectedOption", selectedOption);

  const handleOptionChange = (changeEvent) => {
    setState(changeEvent.target.value);
  };

  return (
    <form>
      <div>
        <h1 className="questions-main-heading">How likely would you recommend our product?</h1>
        <p className="instructions">Please select a number on a scale from 1 to 10 , where 1 is "Very Unlikely" and 10 is "100% will recommend!"</p>
      </div>
      <input type="radio" value="1" name="one" id="one" checked={selectedOption === "1"} onChange={handleOptionChange} />
      <label htmlFor="one">1</label>
      <input type="radio" value="2" name="two" id="two" checked={selectedOption === "2"} onChange={handleOptionChange} />
      <label htmlFor="two">2</label>
      <input type="radio" value="3" name="three" id="three" checked={selectedOption === "3"} onChange={handleOptionChange} />
      <label htmlFor="three">3</label>
      <input type="radio" value="4" name="four" id="four" checked={selectedOption === "4"} onChange={handleOptionChange} />
      <label htmlFor="four">4</label>
      <input type="radio" value="5" name="five" id="five" checked={selectedOption === "5"} onChange={handleOptionChange} />
      <label htmlFor="five">5</label>
      <input type="radio" value="6" name="six" id="six" checked={selectedOption === "6"} onChange={handleOptionChange} />
      <label htmlFor="one">6</label>
      <input type="radio" value="7" name="seven" id="seven" checked={selectedOption === "7"} onChange={handleOptionChange} />
      <label htmlFor="two">7</label>
      <input type="radio" value="8" name="eight" id="eight" checked={selectedOption === "8"} onChange={handleOptionChange} />
      <label htmlFor="three">8</label>
      <input type="radio" value="9" name="nine" id="nine" checked={selectedOption === "9"} onChange={handleOptionChange} />
      <label htmlFor="four">9</label>
      <input type="radio" value="10" name="ten" id="ten" checked={selectedOption === "10"} onChange={handleOptionChange} />
      <label htmlFor="five">10</label>
    </form>
  );
};
