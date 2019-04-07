import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => {
        return <Card card={card} key={index} />;
      })}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  );
};

Cards.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.object
    })
  )
};

export default Cards;
