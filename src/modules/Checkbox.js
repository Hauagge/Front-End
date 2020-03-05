import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({label,
  name,
  value, 
  checkedItems,
  key,
  onChange }) => (
  <div className="form-check">
    <label>
      <input
        value={value}
        type="checkbox"
        label={label}
        name={name}
        onChange={onChange}
        key={key}
        checked={checkedItems.get(label)}
        className="form-check-input"
      />
     <div>{label}</div>
    </label>
  </div>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
export default Checkbox;