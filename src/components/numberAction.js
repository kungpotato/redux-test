import React from "react";
import { connect } from "react-redux";
import { PLUS_NUMBER, MINUS_NUMBER } from "../actions";

const btStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "50%",
};

let NumberAction = ({ handlePlus, handleMinus }) => {
  return (
    <div>
      <button style={btStyle} onClick={handlePlus}>
        +
      </button>
      <button style={btStyle} onClick={handleMinus}>
        -
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => {
      dispatch({ type: PLUS_NUMBER });
    },
    handleMinus: () => {
      dispatch({ type: MINUS_NUMBER });
    },
  };
};

NumberAction = connect(null, mapDispatchToProps)(NumberAction);

export default NumberAction;
