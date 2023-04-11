import React from "react";
import Cards from "./Cards";

const Summary = (props) => {
  const data = props.data;
  console.log(data);
  const cardElements = data.map((item, index) => {
    return <Cards key={index} item={item} />;
  });

  return (
    <div className="summary">
      <h3 className="summary__title">Summary</h3>
      {cardElements}
      <button>Continue</button>
    </div>
  );
};

export default Summary;
