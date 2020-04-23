import React from "react";

const Option = props => {
  return (
    <option value={props.value} key={props.idx} index={props.idx}>
      {props.name}
    </option>
  );
};

export default Option;
