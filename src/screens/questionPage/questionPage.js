import React, { useEffect, useState } from "react";
import Question from "./question/question";
import AnswerForm from "./answerForm/answerForm";
import Button from "../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import Answer from "./answer/answer";
import { useParams } from "react-router";
import { getQuestionById } from "../../redux/questionSlice";

const QuestionPage = () => {
    const [formVisible, setFormVisible] = useState(false);

    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth);
    const { question } = useSelector((state) => state.questions);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getQuestionById(id));
    }, [id, dispatch]);
    return (
        <div className="question-page-wrapper">
            <Question question={question} />
            <div className="question-page-info">
                <h3>5 Answers</h3>
                <Button onClick={() => setFormVisible(!formVisible)}
                        label="Add Answer" className="submit"
                        disabled={!userData} />
            </div>
            <AnswerForm formVisible={formVisible} />
            <Answer />
        </div>
    );
};

export default QuestionPage;