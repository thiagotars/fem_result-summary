import React from "react";

const Result = (props) => {
  const data = props.data;

  function sumByKey(arr, key) {
    return arr.reduce((total, obj) => {
      return obj.hasOwnProperty(key) ? total + obj[key] : total;
    }, 0);
  }

  const renderMessage = (score) => {
    if (score > 70) {
      return (
        <div className="result__message">
          <h3>Great</h3>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      );
    } else if (score > 50) {
      return (
        <div className="result__message">
          <h3>Good</h3>
          <p>
            You scored higher than 50% of the people who have taken these tests.
          </p>
        </div>
      );
    } else {
      return (
        <div className="result__message">
          <h3>Bad</h3>
          <p>
            You scored lower than 50% of the people who have taken these tests.
          </p>
        </div>
      );
    }
  };

  const totalScore = Math.floor(sumByKey(data, "score") / data.length);
  return (
    <div className="result">
      <h3 className="result__title">Your Result</h3>
      <div className="result__score">
        <p>
          <span>{totalScore}</span>of score
        </p>
      </div>
      {renderMessage(totalScore)}
    </div>
  );
};

export default Result;
