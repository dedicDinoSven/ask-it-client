import React, { useState } from "react";
import InputField from "../../components/inputField/inputField";
import Button from "../../components/button/button";

const CreateQuestion = () => {
    const [data, setData] = useState({
        title: "", text: ""
    });

    const onChange = (e) => {
        setData(((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })));
    };

    const handleSubmit = () => {

    };
    return (
        <div className="create-question-wrapper">
            <h1>Ask a Question</h1>
            <section className="create-question-fields">
                <InputField label="Title *" type="text" id="title"
                            name="title" value={data.title} onChange={onChange}
                            autoFocus style={{ width: "100%" }} />
                <InputField label="Question Details*" type="textarea" rows="8"
                            id="text" name="text" value={data.text}
                            onChange={onChange} style={{ width: "100%" }} />
                <Button onClick={handleSubmit} label="Submit" className="submit"
                        style={{ width: "100%" }}
                        disabled={!data.title || data.title === "" ||
                        !data.text || data.text === ""} />
            </section>
        </div>
    );
};

export default CreateQuestion;