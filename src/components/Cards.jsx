import React from "react";

const Cards = (props) => {
  const styles = {
    backgroundColor: props.item.backgroundColor,
    color: props.item.fontColor,
    lineHeight: 1,
  };

  return (
    <div className="summary__item" style={styles}>
      <div className="summary__item__name">
        <img src={props.item.image} alt="" />
        <h4>{props.item.name}</h4>
      </div>
      <p className="summary__item__score">
        <span>{props.item.score}</span>/100
      </p>
    </div>
  );
};

export default Cards;
