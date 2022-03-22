import React, { useState } from "react";
import InputField from "../../../components/inputField/inputField";
import Button from "../../../components/button/button";

const AnswerForm = ({ formVisible }) => {
    const [answer, setAnswer] = useState("");

    const handleSubmit = () => {

    };

    return (
        <div className={`answer-form-wrapper ${formVisible && "transform"}`}>
            <InputField label="Your Answer *" type="textarea" rows="4"
                        id="text" name="text" value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        style={{ width: "100%" }} />
            <Button onClick={handleSubmit} label="Submit" className="submit"
                    style={{ width: "100%" }}
                    disabled={!answer || answer === ""} />
        </div>);
};

export default AnswerForm;