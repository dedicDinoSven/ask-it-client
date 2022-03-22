import React, { useState } from "react";

const InputField = (props) => {
    const [inputFocused, setInputFocused] = useState(false);

    return (
        <div className="input-field-wrapper">
            <label htmlFor={`${props?.id}`}
                   className={inputFocused ? "focused" : ""}>
                {props?.label}
            </label>
            <input type={props?.type} id={props?.id} name={props?.name}
                   value={props?.value ?? ""} onChange={props?.onChange}
                   disabled={props?.disabled ?? false}
                   autoFocus={props?.autoFocus ?? false}
                   onFocus={() => setInputFocused(true)}
                   onBlur={(e) => {
                       !e.target.value && setInputFocused(false);
                   }} style={props?.style} />
        </div>
    );
};

export default InputField;