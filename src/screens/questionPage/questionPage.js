import React, { useState } from "react";
import Question from "./question/question";
import AnswerForm from "./answerForm/answerForm";
import Button from "../../components/button/button";
import { useSelector } from "react-redux";
import Answer from "./answer/answer";

const QuestionPage = () => {
    const [formVisible, setFormVisible] = useState(false);

    const { user } = useSelector((state) => state.auth);
    return (
        <div className="question-page-wrapper">
            <Question />
            <div className="question-page-info">
                <h3>5 Answers</h3>
                <Button onClick={() => setFormVisible(!formVisible)}
                        label="Add Answer" className="submit"
                        disabled={!user} />
            </div>
            <AnswerForm formVisible={formVisible} />
            <Answer />
        </div>
    );
};

export default QuestionPage;