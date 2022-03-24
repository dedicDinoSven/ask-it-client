import React, { useEffect, useState } from "react";
import Question from "./question/question";
import AnswerForm from "./answerForm/answerForm";
import Button from "../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import Answer from "./answer/answer";
import { useParams } from "react-router";
import { getQuestionById } from "../../redux/questionSlice";
import {
    createAnswer, deleteAnswer,
    getAnswersByQuestionId,
    updateAnswer
} from "../../redux/answerSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const QuestionPage = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [answer, setAnswer] = useState("");
    const [editAnswer, setEditAnswer] = useState("");

    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.auth);
    const { question } = useSelector((state) => state.questions);
    const { answers } = useSelector((state) => state.answers);
    const { id } = useParams();
    const decoded = jwt_decode(userData.token);

    useEffect(() => {
        dispatch(getQuestionById(id));
        dispatch(getAnswersByQuestionId(id));
    }, [id, dispatch]);

    const handleAnswerSubmit = async () => {
        try {
            const res = await dispatch(createAnswer({ id, answer }));

            const createdAnswer = unwrapResult(res);
            console.log(createdAnswer);
            setFormVisible(!formVisible);
            setAnswer("");
        } catch (err) {
            console.log(err);
        }
    };

    const handleAnswerUpdate = async (id) => {
        try {
            const res = await dispatch(
                updateAnswer({ id, answer: editAnswer }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleAnswerDelete = async (id) => {
        try {
            const res = await dispatch(deleteAnswer(id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="question-page-wrapper">
            <Question question={question} />
            <div className="question-page-info">
                <h3>{answers?.length} Answers</h3>
                <Button onClick={() => setFormVisible(!formVisible)}
                        label="Add Answer" className="submit"
                        disabled={!userData} />
            </div>
            <AnswerForm formVisible={formVisible} answer={answer}
                        setAnswer={setAnswer}
                        handleAnswerSubmit={handleAnswerSubmit} />
            {answers?.map((item) => {
                return <Answer key={item.id} data={item} userId={decoded.id}
                               editAnswer={editAnswer}
                               setEditAnswer={setEditAnswer}
                               handleAnswerUpdate={handleAnswerUpdate}
                               handleAnswerDelete={handleAnswerDelete}/>;
            })}
        </div>
    );
};

export default QuestionPage;