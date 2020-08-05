import React from "react";
import { connect } from "react-redux";

let Display = ({ number }) => {
  return <div style={{ fontSize: "60px" }}>{number}</div>;
};

const mapStateToProps = ({ numberReducer }) => {
  return {
    number: numberReducer,
  };
};

Display = connect(mapStateToProps, null)(Display);

export default Display;
