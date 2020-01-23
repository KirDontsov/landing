import React from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
// import classnames from "classnames";

const MaskInput = props => {
  const { mask, label, onChange, value, name } = props;
  return (
    <div className="form-group">
      <label className="phone">{label}</label>

      <InputMask
        mask={mask}
        autoComplete="off"
        value={value}
        onChange={onChange}
      >
        <TextField
          name={name}
          label={label}
          // onChange={onChange}
          value={value}
          margin="normal"
          fullWidth={true}
          required
          type="text"
        />
      </InputMask>
    </div>
  );
};

export default MaskInput;
